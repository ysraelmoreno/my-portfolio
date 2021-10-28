import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  button:first-child {
    border-top-left-radius: 5px;
  }

  button:last-child {
    border-top-right-radius: 5px;
  }
`;

export const TabsItemContainer = styled.div`
  display: flex;
`;
