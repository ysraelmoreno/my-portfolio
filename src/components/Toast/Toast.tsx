import { ToastMessage } from "./types";

interface ToastProps {
  children: React.ReactNode;
  message: ToastMessage;
}

function Toast({ children, message }: ToastProps) {
  return (
    <>
      {children} - {message}
    </>
  );
}

export default Toast;
