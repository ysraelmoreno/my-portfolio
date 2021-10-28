import styled, { css } from "styled-components";

interface TabsContentProps {
  active: boolean;
}

export const TabsContentContainer = styled.div<TabsContentProps>`
  width: 100%;
  display: none;
  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;
