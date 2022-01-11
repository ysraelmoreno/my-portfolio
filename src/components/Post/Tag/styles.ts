import styled from "styled-components";

export const TagWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  font-size: 11px;
  opacity: 0.5;
  transition: all 0.2s ease;
  border: 1px solid #fff;
  text-decoration: none;
  & + a {
    margin-left: 10px;
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
