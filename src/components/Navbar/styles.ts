import styled, { css } from "styled-components";
import { animated } from "react-spring";

interface NavMobileButtonContainerProps {
  isOpen: boolean;
}

interface NavItemProps {
  isOpen: boolean;
}
export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavItem = styled.a`
  color: white;
  opacity: 0.7;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  font-size: 12px;
  width: 100%;

  & + a {
    margin-left: 25px;
  }

  &:hover {
    opacity: 1;
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
    box-shadow: 0px 0px 4px rgba(42, 217, 255, 0.65);
  }

  @media (max-width: 1240px) {
    &::after {
      margin-top: 10px;
    }
  }
`;

export const NavMobileButtonContainer = styled.button<NavMobileButtonContainerProps>`
  min-width: 30px;
  width: 100%;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  border: none;
  z-index: 9999;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isOpen &&
    css`
      width: 45px;
      height: 55px;
      border-radius: 10px 0 0 10px;
      transform: translateX(-190px);
    `}

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuBar = styled(animated.div)<NavItemProps>`
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.1s ease-in-out;
  display: flex;

  & + div {
    margin-top: 5px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      width: 70%;
    `}
`;

export const ModalNavbar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  a {
    color: black;
    margin: 10px 0;
    padding: 0 20px;
  }
`;
