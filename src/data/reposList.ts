import JustTodoIt from "../assets/projects/just-todo.png";
import MoneyControl from "../assets/projects/money-control.png";
import CalculateJourney from "../assets/projects/calculate-journey.png";

interface ReposList {
  title: string;
  subTitle: string;
  imgURL: string;
  stacks: ("javascript" | "typescript" | "reactjs")[];
  url: string;
}

const repos: ReposList[] = [
  {
    title: "just-todo-it",
    subTitle:
      "A Todo List created with React to study hooks and architecture. An Todo List based on Shia Labeouf motivitional speech, enjoy!",
    imgURL: JustTodoIt,
    stacks: ["reactjs", "typescript"],
    url: "https://github.com/ysraelmoreno/just-todo-it",
  },
  {
    title: "money-control-react",
    subTitle:
      "An application to control money movimentation an calculate money spent and total currency",
    imgURL: MoneyControl,
    stacks: ["reactjs", "typescript"],
    url: "https://github.com/ysraelmoreno/money-control-react",
  },
  {
    title: "calculateyourjourney",
    subTitle:
      "A Desktop application developed with Electron + ReactJS to notify users when work is done.",
    imgURL: CalculateJourney,
    stacks: ["reactjs", "typescript"],
    url: "https://github.com/ysraelmoreno/calculateyourjourney",
  },
];

export default repos;
