import { createContext, useCallback, useContext, useState } from "react";
import Toast from ".";
import generateHash from "../../utils/generateHash";

interface ToastContextProps {
  addToast: (toast: Omit<Toast, "id">) => void;
  toast: Toast[];
  removeToast: (id: string) => void;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export interface Toast {
  id: string;
  message: string;
  type: "success" | "alert" | "info";
  description: string;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<Toast[]>([]);

  const addToast = useCallback(
    ({ message, description, type }: Omit<Toast, "id">) => {
      setToast((prevState) => [
        ...prevState,
        { id: generateHash(), message, type, description },
      ]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    const toastRemoved = toast.filter((toast) => toast.id !== id);

    setToast(toastRemoved);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toast }}>
      {children}
      <Toast toast={toast} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be wrapped inside an ToastProvider");
  }

  return context;
};
