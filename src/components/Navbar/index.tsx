import { NavbarContainer, Nav, NavItem, ModalNavbar } from "./styles";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import Modal from "../Modal";
import NavMobileButton from "./NavMobileButton";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <Nav>
          <NavItem href="#">Home</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#">Contact</NavItem>
          <NavItem href="#">Blog</NavItem>
          <NavItem href="#">
            <FiGithub />
          </NavItem>
          <NavItem href="#">
            <FiLinkedin />
          </NavItem>
        </Nav>
        <NavMobileButton />

        <Modal>
          <ModalNavbar>
            <NavItem href="#">Home</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#">Contact</NavItem>
            <NavItem href="#">Blog</NavItem>
            <NavItem href="#">
              <FiGithub />
            </NavItem>
            <NavItem href="#">
              <FiLinkedin />
            </NavItem>
          </ModalNavbar>
        </Modal>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
