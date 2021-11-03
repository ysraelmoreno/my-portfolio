import styled, { css } from "styled-components";

interface ContainerProps {
  visible: boolean;
}

export const Animated = styled.div<ContainerProps>`
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform: translateX(-30px);
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`;
