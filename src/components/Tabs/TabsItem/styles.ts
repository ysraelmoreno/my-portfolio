import styled, { css } from "styled-components";

interface TabsItemContainerProps {
  active: boolean;
}

export const TabsItemContainer = styled.button<TabsItemContainerProps>`
  height: 76px;
  background-color: none;
  border: none;
  position: relative;

  color: #6a6a6a;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0e0e0e;
    color: white;
  }

  &::after {
    content: "";
    display: block;
    height: 4px;
    background-color: #0b4d5b;
    width: 100%;
    position: absolute;
    transition: all 0.2s ease-in-out;
    bottom: 0;
  }

  ${(props) =>
    props.active &&
    css`
      color: white;
      background-color: #0e0e0e;
      font-weight: bold;

      &::after {
        background-color: #2bd9ff;
        box-shadow: 0px 0px 6px rgba(42, 217, 255, 0.25);
      }
    `}
`;

export const Container = styled.div`
  display: flex;
`;
