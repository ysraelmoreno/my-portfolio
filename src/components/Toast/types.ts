export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "error" | "info";
  children: React.ReactNode;
}
