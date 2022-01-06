import { createContext, useContext } from "react";

interface NavbarProviderProps {
  children: React.ReactNode;
}

const NavbarContext = createContext({} as any);

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
  return (
    <NavbarContext.Provider value={true}>{children}</NavbarContext.Provider>
  );
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }

  return context;
};
