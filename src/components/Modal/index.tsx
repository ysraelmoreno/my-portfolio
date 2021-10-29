import { useModal } from "../../context/ModalContext";
import { Container } from "./styles";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const { isOpen } = useModal();
  return <Container open={isOpen}>{children}</Container>;
}

export default Modal;
