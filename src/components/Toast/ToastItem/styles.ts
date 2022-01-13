import styled, { css, keyframes } from "styled-components";

interface ToastItemContainerProps {
  type: "success" | "alert" | "info";
}

const enter = keyframes`
  0% {
    transform: translateX(500px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const ToastItemContainer = styled.div<ToastItemContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  width: 100%;
  padding: 20px;
  max-height: 100px;
  height: 100%;
  background-color: white;

  right: 30px;
  border-radius: 10px;
  border-bottom: 4px solid #1c66a3;

  position: fixed;
  bottom: 30px;
  right: 20px;
  animation: ${enter} 0.5s ease;

  ${(props) =>
    props.type === "alert" &&
    css`
      border-bottom: 4px solid red;
    `}

  ${(props) =>
    props.type === "success" &&
    css`
      border-bottom: 4px solid #18961c;
    `}
`;

export const TitleContainer = styled.div``;

export const DescriptionContainer = styled.div`
  opacity: 0.5;
`;
