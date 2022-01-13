import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "../components/Toast/ToastContext";

export interface EasterEgg {
  R2: boolean;
  xWing: boolean;
}

interface EasterEggsContextData {
  isShowingEgg: boolean;
  setIsShowingEgg: (isShowingEgg: boolean) => void;
  easterEgg: "R2" | "xWing";
}

interface EasterEggsProviderProps {
  children: React.ReactNode;
}

const EasterEggsContext = createContext<EasterEggsContextData>(
  {} as EasterEggsContextData
);

export const EasterEggsProvider = ({ children }: EasterEggsProviderProps) => {
  const [keys, setKeys] = useState<string[]>([]);
  const [isShowingEgg, setIsShowingEgg] = useState(false);
  const [easterEgg, setEasterEgg] = useState<"R2" | "xWing">(
    "" as "R2" | "xWing"
  );
  const { addToast } = useToast();

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if (keys.length >= 3) {
        setKeys([]);
      }

      if (isShowingEgg) {
        return;
      }

      if (event.shiftKey && key === "@") {
        setEasterEgg("R2");
        setIsShowingEgg(true);
      }

      if (event.shiftKey && key === "x") {
        setEasterEgg("xWing");
        setIsShowingEgg(true);
      }

      return setKeys((keys) => [...keys, key]);
    };

    window.addEventListener("keydown", keyListener);

    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      addToast({
        message: "Press Shift + 2 to see a surprise",
        description: "You can see a nice easter egg!",
        type: "info",
      });
    }, 10000);
  }, [addToast]);

  return (
    <EasterEggsContext.Provider
      value={{ easterEgg, isShowingEgg, setIsShowingEgg }}
    >
      {children}
    </EasterEggsContext.Provider>
  );
};

export const useEasterEggs = () => {
  const context = useContext(EasterEggsContext);

  if (!context) {
    throw new Error("useEasterEggs must be used within a EasterEggsProvider");
  }

  return context;
};
