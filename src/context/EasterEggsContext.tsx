import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "../components/Toast/ToastContext";
import { setCookie, parseCookies } from "nookies";
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
  const [isShowingEgg, setIsShowingEgg] = useState(false);
  const [easterEgg, setEasterEgg] = useState<"R2" | "xWing">(
    "" as "R2" | "xWing"
  );
  const { addToast } = useToast();

  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

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
    };

    window.addEventListener("keydown", keyListener);

    return () => {
      window.removeEventListener("keydown", keyListener);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const { easterEggToast } = parseCookies();

      if (!easterEggToast) {
        addToast({
          message: "Press Shift + 2 to see a surprise",
          description: "You can see a nice easter egg!",
          type: "info",
        });

        setCookie(null, "easterEggToast", "true", {
          maxAge: 30 * 24 * 60 * 60,
          path: "/",
        });
      }
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
