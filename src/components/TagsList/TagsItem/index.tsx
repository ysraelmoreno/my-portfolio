import { LiHTMLAttributes, MouseEvent, useCallback, useEffect } from "react";
import { useTags } from "../TagsProvider";
import { TagsCounter, TagsItemContainer } from "./styles";

export interface TagsItemProps extends LiHTMLAttributes<HTMLLIElement> {
  tag: string;
  children: React.ReactNode;
  counter?: number;
  selected?: boolean;
}

function TagsItem({
  children,
  tag,
  counter,
  onClick,
  ...props
}: TagsItemProps) {
  const { handleSelectTag, selectedTag, registerTag } = useTags();

  const handleClick = useCallback((ev: MouseEvent<HTMLLIElement>) => {
    handleSelectTag(tag);

    onClick && onClick(ev);
  }, []);

  useEffect(() => {
    registerTag(tag);
  }, [tag]);

  return (
    <TagsItemContainer
      onClick={handleClick}
      active={selectedTag === tag}
      id={tag}
      data-value={tag}
      {...props}
    >
      {children}
      {counter && <TagsCounter>{counter}</TagsCounter>}
    </TagsItemContainer>
  );
}

export default TagsItem;
