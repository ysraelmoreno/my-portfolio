import styled, { css } from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  z-index: 9999;
  position: fixed;
  transform: translateX(100%);
  display: none;
  width: 100%;
  max-width: 200px;
  background-color: white;
  height: 100%;
  color: black;
  top: 0;
  right: 0;
  transition: all 0.2s ease;

  ${(props) =>
    props.open &&
    css`
      display: block;
      transform: translateX(0);
    `}
`;
