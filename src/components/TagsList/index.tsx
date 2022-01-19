import { TagsListContainer } from "./styles";
import TagsItem, { TagsItemProps } from "./TagsItem";
import { TagsProvider } from "./TagsProvider";

interface TagsItemChildrenProps {
  children: {
    props: TagsItemProps;
  };
}

interface TagsListProps {
  children: React.ReactElement<TagsItemChildrenProps>[];
}

function TagsList({ children }: TagsListProps) {
  return (
    <TagsProvider>
      <TagsListWrapper>{children}</TagsListWrapper>
    </TagsProvider>
  );
}

function TagsListWrapper({ children }: TagsListProps) {
  return (
    <TagsListContainer>
      {children &&
        children.map((item) => (
          <TagsItem
            key={item.props.children?.props.tag}
            {...item.props.children.props}
          >
            {item.props.children.props.children}
          </TagsItem>
        ))}
    </TagsListContainer>
  );
}

export default TagsList;
