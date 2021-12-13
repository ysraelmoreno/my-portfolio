import { NavbarContainer, Nav, NavItem, ModalNavbar } from "./styles";

import { FiGithub, FiLinkedin } from "react-icons/fi";
import Modal from "../Modal";
import NavMobileButton from "./NavMobileButton";
import useScrollTo from "../../hooks/useScrollTo";

function Navbar() {
  const { scrollTo } = useScrollTo();

  return (
    <>
      <NavbarContainer>
        <Nav>
          <NavItem onClick={() => scrollTo("home")}>Home</NavItem>
          <NavItem onClick={() => scrollTo("about")}>Sobre</NavItem>
          <NavItem onClick={() => scrollTo("projects")}>Projects</NavItem>
          <NavItem onClick={() => scrollTo("contacts")}>Contact</NavItem>
          <NavItem href="#">Blog</NavItem>
          <NavItem target="_blank" href="https://github.com/ysraelmoreno">
            <FiGithub />
          </NavItem>
          <NavItem
            target="_blank"
            href="https://www.linkedin.com/in/ysrael-moreno-789877160/"
          >
            <FiLinkedin />
          </NavItem>
        </Nav>
        <NavMobileButton />

        <Modal>
          <ModalNavbar>
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">Sobre</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#contact">Contact</NavItem>
            <NavItem href="#">Blog</NavItem>
            <NavItem href="https://github.com/ysraelmoreno">
              <FiGithub />
            </NavItem>
            <NavItem href="https://www.linkedin.com/in/ysrael-moreno-789877160/">
              <FiLinkedin />
            </NavItem>
          </ModalNavbar>
        </Modal>
      </NavbarContainer>
    </>
  );
}

export default Navbar;
