import { NavbarContainer, NavItem } from "./styles";

import { FiGithub, FiLinkedin } from "react-icons/fi";

function Navbar() {
  return (
    <NavbarContainer>
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
    </NavbarContainer>
  );
}

export default Navbar;
