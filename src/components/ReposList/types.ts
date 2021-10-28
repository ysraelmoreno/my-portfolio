export interface StacksProps {
  stacks: ("javascript" | "typescript" | "reactjs")[];
}

export interface ReposListProps {
  title: string;
  subtitle: string;
  imgURL: string;
  url: string;
  stacks: ("javascript" | "typescript" | "reactjs")[];
}
