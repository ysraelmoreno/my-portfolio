import { SiTypescript, SiJavascript, SiReact } from "react-icons/si";
import Icon from "../Icon";
import { IconContainer } from "./styles";
import { StacksProps } from "./types";

function ShowStacks({ stacks }: StacksProps): JSX.Element {
  const listOfStacks = {
    javascript: <Icon icon={SiJavascript} />,
    typescript: <Icon icon={SiTypescript} />,
    reactjs: <Icon icon={SiReact} />,
  };

  return (
    <IconContainer>{stacks.map((stack) => listOfStacks[stack])}</IconContainer>
  );
}

export default ShowStacks;
