import { TagsListContainer } from "./styles";
import TagsItem, { TagsItemProps } from "./TagsItem";
import { TagsProvider, useTags } from "./TagsProvider";

interface TagsListProps {
  children: React.ReactElement<TagsItemProps>[];
}

function TagsList({ children }: TagsListProps) {
  return (
    <TagsProvider>
      <TagsListWrapper>{children}</TagsListWrapper>
    </TagsProvider>
  );
}

function TagsListWrapper({ children }: TagsListProps) {
  const {} = useTags();
  return (
    <TagsListContainer>
      {children &&
        children.map((item) => (
          <TagsItem
            {...item.props}
            key={`tag-${item.props.tag}`}
            tag={item.props.tag}
          >
            {item.props.children}
          </TagsItem>
        ))}
    </TagsListContainer>
  );
}

export default TagsList;
