import styled, { css } from "styled-components";

interface ITagsItem {
  active: boolean;
}

export const TagsItemContainer = styled.li<ITagsItem>`
  list-style: none;
  padding: 10px 20px;
  color: #333;
  display: flex;
  align-items: center;
  opacity: 0.3;

  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
`;

export const TagsCounter = styled.span`
  margin-left: 10px;
  opacity: 0.5;
`;
