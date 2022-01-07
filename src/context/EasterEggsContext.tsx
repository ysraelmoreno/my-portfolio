import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      console.log(key);

      if (keys.length >= 3) {
        setKeys([]);
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
