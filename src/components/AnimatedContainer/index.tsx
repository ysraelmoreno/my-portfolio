import { useRef } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { Animated } from "./styles";

interface AnimatedContainerProps {
  children: React.ReactNode;
}

function AnimatedContainer({ children }: AnimatedContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const isVisible = useOnScreen(containerRef);

  return (
    <Animated visible={isVisible} ref={containerRef}>
      {children}
    </Animated>
  );
}

export default AnimatedContainer;
