import { useEasterEggs } from "../../../context/EasterEggsContext";
import { useSpring } from "react-spring";
import { AnimatedImage } from "./styles";
import { useEffect } from "react";

function R2() {
  const { isShowingEgg } = useEasterEggs();

  const props = useSpring({
    opacity: isShowingEgg ? 1 : 0,
    transform: isShowingEgg ? "translateY(0px)" : "translateY(100px)",
    delay: 0,
    immediate: true,
  });

  useEffect(() => {
    const sound = new Audio("assets/processing-r2d2.mp3");
    sound.play();
    sound.volume = 0.1;
  }, [isShowingEgg]);

  return (
    <>
      <AnimatedImage src="assets/r2.png" style={props} />
    </>
  );
}

export default R2;
