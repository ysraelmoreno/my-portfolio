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

  const stacksToLowerCase = (stack: string): string => {
    return String(stack).toLowerCase();
  };
  return (
    <IconContainer>
      {stacks.map(
        (stack) =>
          listOfStacks[
            stacksToLowerCase(stack) as "javascript" | "typescript" | "reactjs"
          ]
      )}
    </IconContainer>
  );
}

export default ShowStacks;
