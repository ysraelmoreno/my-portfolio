import { MenuBar, NavMobileButtonContainer } from "./styles";
import { useSpring } from "react-spring";
import { useModal } from "../../context/ModalContext";

function NavMobileButton() {
  const { isOpen, setIsOpen } = useModal();

  const topBarProps = useSpring({
    transform: isOpen
      ? "translateY(5px) rotateZ(45deg)"
      : "translateY(0px) rotateZ(0)",
    delay: 0,
    immediate: true,
  });

  const bottomBarProps = useSpring({
    transform: isOpen
      ? "translateY(-3px) rotateZ(-45deg)"
      : "translateY(0px) rotateZ(0)",
    opacity: isOpen ? 0 : 1,

    delay: 0,
    immediate: true,
  });

  const middleBarProps = useSpring({
    transform: isOpen
      ? "translateY(-3px) rotateZ(-45deg)"
      : "translateY(0px) rotateZ(0)",
    delay: 0,
    immediate: true,
  });
  return (
    <NavMobileButtonContainer
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <MenuBar isOpen={isOpen} style={topBarProps}></MenuBar>
      <MenuBar isOpen={isOpen} style={middleBarProps}></MenuBar>
      <MenuBar isOpen={isOpen} style={bottomBarProps}></MenuBar>
    </NavMobileButtonContainer>
  );
}

export default NavMobileButton;
