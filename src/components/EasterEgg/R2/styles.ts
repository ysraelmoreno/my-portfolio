import { animated } from "react-spring";
import styled from "styled-components";

export const AnimatedImage = styled(animated.img)`
  transition: all 0.5s ease-in-out;
  bottom: 20px;
  left: 20px;
  position: absolute;
  width: 5%;
`;
