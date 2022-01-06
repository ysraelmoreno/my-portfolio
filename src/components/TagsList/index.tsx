import { TagsListContainer } from "./styles";

interface TagsListProps {
  children: React.ReactNode;
}

function TagsList({ children }: TagsListProps) {
  return <TagsListContainer>{children}</TagsListContainer>;
}

export default TagsList;
