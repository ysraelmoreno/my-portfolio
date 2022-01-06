import styled, { css } from "styled-components";

interface FirstPostProps {
  image: string;
}

interface PostProps {
  image: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
`;

export const FeaturedPostsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  height: 35%;
  width: 100%;

  margin-top: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 99;
  padding: 20px;

  span {
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 99;
  padding: 40px 20px;

  p {
    opacity: 0.5;
  }
`;

export const FirstPostContainer = styled.div<FirstPostProps>`
  background-color: #000;
  position: relative;
  max-width: 770px;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-radius: 10px;

  grid-area: 1 / 1 / 6 / 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-area: 1 / 1 / 3 / 5;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    opacity: 0.5;
    border-radius: 10px;

    background-size: cover;
    background-image: url(${(props) => props.image});
    height: 100%;
  }
`;

export const PostsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  background-color: #fff;
  width: 100%;
  margin-top: 50px;
`;

export const SecondPostContainer = styled.div<FirstPostProps>`
  background-color: #000;
  position: relative;
  width: 100%;
  padding: 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: 1 / 3 / 3 / 5;

  p {
    height: 30px;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    grid-area: 3 / 1 / 5 / 3;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    opacity: 0.5;
    border-radius: 10px;
    background-size: cover;

    background-image: url(${(props) => props.image});
    height: 100%;
  }
`;

export const ThirdPostContainer = styled.div<FirstPostProps>`
  background-color: #000;
  position: relative;
  width: 100%;
  padding: 0px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-area: 3 / 3 / 6 / 5;

  @media (max-width: 768px) {
    grid-area: 3 / 3 / 5 / 5;
  }

  p {
    height: 30px;
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    opacity: 0.5;
    border-radius: 10px;
    background-size: cover;

    background-image: url(${(props) => props.image});
    height: 100%;
  }
`;

export const TagsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;

    li {
      list-style: none;
      padding: 10px 20px;
      color: #333;
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
        opacity: 0.3;
      }
    }
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px;
`;

export const Post = styled.div<PostProps>`
  width: 100%;
  max-height: 320px;
  height: 100%;
  position: relative;
  border-radius: 10px;
  z-index: 3;

  div {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  & + div {
    margin-top: 10px;
  }

  p {
    margin-top: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #000;
    border-radius: 10px;
  }

  ${(props) =>
    props.image &&
    css`
      background-size: cover;
      background-position: center;
      background-image: url(${props.image});
    `}
`;
