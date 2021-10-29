import { SiTypescript, SiJavascript, SiReact, SiHtml5 } from "react-icons/si";
import Icon from "../Icon";
import { IconContainer } from "./styles";
import { StacksProps } from "./types";

function ShowStacks({ stacks }: StacksProps): JSX.Element {
  const listOfStacks = {
    javascript: <Icon icon={SiJavascript} />,
    typescript: <Icon icon={SiTypescript} />,
    reactjs: <Icon icon={SiReact} />,
    html: <Icon icon={SiHtml5} />,
  };

  const stacksToLowerCase = (stack: string): string => {
    return String(stack).toLowerCase();
  };
  return (
    <IconContainer>
      {stacks.map(
        (stack) =>
          listOfStacks[
            stacksToLowerCase(stack) as
              | "javascript"
              | "typescript"
              | "reactjs"
              | "html"
          ]
      )}
    </IconContainer>
  );
}

export default ShowStacks;
