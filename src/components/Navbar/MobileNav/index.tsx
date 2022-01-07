import Modal from "../../Modal";
import { NavItem, ModalNavbar } from "../styles";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import Menu from "../Menu";

function MobileNav() {
  return (
    <Modal>
      <ModalNavbar>
        <Menu />
      </ModalNavbar>
    </Modal>
  );
}

export default MobileNav;
