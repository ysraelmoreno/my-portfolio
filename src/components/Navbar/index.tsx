import { NavbarContainer, Nav } from "./styles";

import NavMobileButton from "./NavMobileButton";
import MobileNav from "./MobileNav";
import Menu from "./Menu";

function Navbar() {
  return (
    <>
      <NavbarContainer>
        <Nav>
          <Menu />
        </Nav>
        <NavMobileButton />
        <MobileNav />
      </NavbarContainer>
    </>
  );
}

export default Navbar;
