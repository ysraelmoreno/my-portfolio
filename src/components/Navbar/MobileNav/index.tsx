import Modal from "../../Modal";
import { NavItem, ModalNavbar } from "../styles";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function MobileNav() {
  return (
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
  );
}

export default MobileNav;
