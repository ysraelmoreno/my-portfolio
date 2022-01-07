import useScrollTo from "../../../hooks/useScrollTo";
import { NavItem } from "../styles";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Menu() {
  const { scrollTo } = useScrollTo();

  const handleScrollTo = (section: string) => {
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }

    scrollTo(section);
  };

  return (
    <>
      <NavItem onClick={() => handleScrollTo("home")}>Home</NavItem>
      <NavItem onClick={() => handleScrollTo("about")}>About</NavItem>
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
    </>
  );
}

export default Menu;
