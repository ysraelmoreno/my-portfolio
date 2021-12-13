import { useCallback, createContext, useState, useContext } from "react";

interface ScrollToOptions {
  top?: number;
  left?: number;
  behavior?: ScrollBehavior;
}

interface ScrollContext {
  signRef: (ref: HTMLElement) => void;
  scrollTo: (id: string) => void;
}

interface ScrollProviderProps {
  children: React.ReactNode;
}

interface IRefs {
  id: string;
  ref: HTMLElement;
}

const ScrollContext = createContext<ScrollContext>({} as ScrollContext);

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [refs, setRefs] = useState<IRefs[]>([]);

  const signRef = useCallback(
    (ref: HTMLElement) => {
      const findRef = refs.find((reference) => reference.id === ref.id);

      if (findRef) {
        return;
      }

      const newRef = {
        id: ref.id,
        ref,
      };

      setRefs((refs) => [...refs, newRef]);
    },
    [refs]
  );

  const scrollTo = useCallback(
    (id: string) => {
      const findElement = refs.find((ref) => ref.id === id);

      if (findElement) {
        window.scrollTo({
          top: findElement.ref.offsetTop ?? 0,
          left: findElement?.ref.offsetLeft ?? 0,
          behavior: "smooth",
        });
      }
    },
    [refs]
  );

  return (
    <ScrollContext.Provider value={{ scrollTo, signRef }}>
      {children}
    </ScrollContext.Provider>
  );
};

function useScrollTo() {
  const context = useContext(ScrollContext);

  return context;
}

export default useScrollTo;
