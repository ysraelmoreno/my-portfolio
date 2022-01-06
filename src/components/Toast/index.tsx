import { ToastMessage } from "./types";

import Toast from "./Toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

function ToastContainer({ messages }: ToastContainerProps) {
  return (
    <>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </>
  );
}

export default ToastContainer;
