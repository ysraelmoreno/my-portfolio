import { ResponsiveImageType, StructuredTextDocument } from "react-datocms";

export interface StacksProps {
  stacks: ("javascript" | "typescript" | "reactjs")[];
}

export interface ReposListProps {
  title: string;
  subtitle: StructuredTextDocument;
  thumbnail: ResponsiveImageType;
  url?: string;
  stacks: ("javascript" | "typescript" | "reactjs")[];
}
