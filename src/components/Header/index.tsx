import { useState } from "react";

import Logo from "../../assets/logo.svg";
import Navbar from "../Navbar";

import { HeaderContainer, HeaderContent } from "./styles";

function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 40) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  });

  return (
    <HeaderContainer scrolled={hasScrolled}>
      <HeaderContent>
        <img src={Logo} alt="Logo" />
        <Navbar />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
