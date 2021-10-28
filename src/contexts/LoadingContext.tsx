import { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingContext = createContext<LoadingContextProps>(
  {} as LoadingContextProps
);

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
