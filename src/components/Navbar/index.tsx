import { NavbarContainer, Nav, NavItem, ModalNavbar, NavLink } from "./styles";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import NavMobileButton from "./NavMobileButton";
import useScrollTo from "../../hooks/useScrollTo";
import MobileNav from "./MobileNav";

function Navbar() {
  const { scrollTo } = useScrollTo();

  const handleScrollTo = (section: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }

    scrollTo(section);
  };

  return (
    <>
      <NavbarContainer>
        <Nav>
          <NavItem onClick={() => handleScrollTo("home")}>Home</NavItem>
          <NavItem onClick={() => handleScrollTo("about")}>Sobre</NavItem>
          <NavItem onClick={() => handleScrollTo("projects")}>Projects</NavItem>
          <NavItem onClick={() => handleScrollTo("contacts")}>Contact</NavItem>
          <Link href="/blog" passHref>
            <NavItem>Blog</NavItem>
          </Link>
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

        <MobileNav />
      </NavbarContainer>
    </>
  );
}

export default Navbar;
