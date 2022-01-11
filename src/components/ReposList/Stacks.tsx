import { SiTypescript, SiJavascript, SiReact, SiHtml5 } from "react-icons/si";
import Icon from "../Icon";
import { IconContainer } from "./styles";
import { StacksProps } from "./types";

function ListOfStacks({
  stack,
}: {
  stack: "javascript" | "typescript" | "reactjs" | "html";
}) {
  const listOfStacks = {
    javascript: <Icon icon={SiJavascript} />,
    typescript: <Icon icon={SiTypescript} />,
    reactjs: <Icon icon={SiReact} />,
    html: <Icon icon={SiHtml5} />,
  };

  return listOfStacks[stack];
}

const stacksToLowerCase = (
  stack: string
): "javascript" | "typescript" | "reactjs" | "html" => {
  return String(stack).toLowerCase() as
    | "javascript"
    | "typescript"
    | "reactjs"
    | "html";
};

function ShowStacks({ stacks }: StacksProps): JSX.Element {
  return (
    <IconContainer>
      {stacks.map((stack) => (
        <ListOfStacks
          key={stacksToLowerCase(stack)}
          stack={stacksToLowerCase(stack)}
        />
      ))}
    </IconContainer>
  );
}

export default ShowStacks;
