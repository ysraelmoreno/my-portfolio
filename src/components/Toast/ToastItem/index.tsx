import { useEffect } from "react";
import { useToast } from "../ToastContext";
import {
  DescriptionContainer,
  TitleContainer,
  ToastItemContainer,
} from "./styles";

interface ToastItemProps {
  message: string;
  description: string;
  id: string;
  type?: "success" | "alert" | "info";
}

function ToastItem({
  message,
  description,
  id,
  type = "info",
}: ToastItemProps) {
  const { removeToast } = useToast();

  useEffect(() => {
    setTimeout(() => removeToast(id), 3000);
  }, [removeToast]);
  return (
    <ToastItemContainer type={type}>
      <TitleContainer>{message}</TitleContainer>
      <DescriptionContainer>{description}</DescriptionContainer>
    </ToastItemContainer>
  );
}

export default ToastItem;
