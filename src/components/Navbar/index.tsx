import { NavbarContainer, Nav } from "./styles";

import NavMobileButton from "./NavMobileButton";
import MobileNav from "./MobileNav";
import Menu from "./Menu";
import { useModal } from "../../context/ModalContext";

function Navbar() {
  const { isOpen } = useModal();
  return (
    <>
      <NavbarContainer>
        <Nav>
          <Menu />
        </Nav>
        <NavMobileButton />
        {isOpen && <MobileNav />}
      </NavbarContainer>
    </>
  );
}

export default Navbar;
