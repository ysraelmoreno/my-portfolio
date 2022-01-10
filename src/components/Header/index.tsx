import { useEffect, useState } from "react";

import Navbar from "../Navbar";

import { HeaderContainer, HeaderContent } from "./styles";

interface HeaderProps {
  staticMenu?: boolean;
}

function Header({ staticMenu = false }: HeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (staticMenu) {
      return setHasScrolled(true);
    }
    function handleScroll() {
      if (window.scrollY >= 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={hasScrolled}>
      <HeaderContent>
        <a href="/">Ysrael Moreno</a>
        <Navbar />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
