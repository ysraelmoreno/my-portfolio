import { ToastContainer } from "./styles";
import { Toast } from "./ToastContext";
import ToastItem from "./ToastItem";

interface ToastProps {
  toast: Toast[];
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
