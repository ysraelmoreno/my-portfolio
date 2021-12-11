import { useEffect, useState } from "react";

import Navbar from "../Navbar";

import { HeaderContainer, HeaderContent } from "./styles";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
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
        <h1>Ysrael Moreno</h1>
        <Navbar />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
