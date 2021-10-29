import styled, { css, keyframes } from "styled-components";

interface SkeletonProps {
  width?: string;
  height?: string;
  theme?: "light" | "dark";
  mt?: string;
}

const LoadingAnimation = keyframes({
  to: {
    left: "250%",
  },
});

export const SkeletonWrapper = styled.div<SkeletonProps>`
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.width &&
    props.height &&
    css`
      width: ${props.width};
      height: ${props.height};
      display: flex;
      background-color: #0c0c0c;
      border-radius: 10px;

      &::after {
        content: "";
        display: block;
        width: 30%;
        height: 100%;
        border-radius: 10px;
        position: absolute;
        background: linear-gradient(
          90deg,
          rgba(18, 18, 18, 1) 0%,
          rgba(12, 12, 12, 1) 100%
        );
        background-repeat: no-repeat;
        left: -250px;
        animation: ${LoadingAnimation} 1.5s linear infinite;
      }
    `}

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}

  ${(props) =>
    props.theme === "light" &&
    css`
      background-color: rgba(241, 241, 241, 1);

      &::after {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(241, 241, 241, 1) 100%
        ) !important;
      }
    `}
`;
