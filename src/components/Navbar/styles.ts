import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.a`
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  font-size: 12px;

  & + a {
    margin-left: 25px;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    border-radius: 3px;
    background-color: #2bd9ff;

    transition: all 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
