import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 01));
  }
`;
