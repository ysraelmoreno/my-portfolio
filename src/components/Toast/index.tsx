import { ToastContainer } from "./styles";
import { IToast } from "./ToastContext";
import ToastItem from "./ToastItem";

interface ToastProps {
  toast: IToast[];
}

function Toast({ toast }: ToastProps) {
  return (
    <ToastContainer>
      {toast.map((item) => (
        <ToastItem
          id={item.id}
          message={item.message}
          key={item.id}
          description={item.description}
        />
      ))}
    </ToastContainer>
  );
}

export default Toast;
