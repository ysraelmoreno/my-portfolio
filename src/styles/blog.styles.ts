import styled, { css } from "styled-components";

interface FirstPostProps {
  image: string;
}

interface PostProps {
  image: string;
}

export const Container = styled.div`
  body {
    color: #fff !important;
  }

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

  a {
    font-size: 11px;
    opacity: 0.5;
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    margin-right: 20px;

    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const TextContainer = styled.a`
  display: flex;
  flex-direction: column;
  z-index: 99;
  padding: 40px 20px;
  text-decoration: none;
  color: white;

  p {
    opacity: 0.5;
  }
`;

export const FeaturedPostContainer = styled.div`
  background-color: #000;
  position: relative;
  max-width: 770px;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
`;

export const FirstPostContainer = styled(FeaturedPostContainer)<FirstPostProps>`
  grid-area: 1 / 1 / 6 / 3;

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

export const SecondPostContainer = styled(FeaturedPostContainer)<PostProps>`
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

export const ThirdPostContainer = styled(FeaturedPostContainer)<FirstPostProps>`
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

export const PostsContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  background-color: #fff;
  width: 100%;
  margin-top: 50px;

  > p {
    color: #101010;
    text-align: center;
    opacity: 0.5;
  }
`;

export const TagsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
`;

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
  padding: 10px;
  height: 100%;
`;

export const Post = styled.div<PostProps>`
  width: 100%;
  max-height: 320px;
  height: 100%;
  position: relative;
  border-radius: 10px;
  z-index: 3;
  transition: all 0.3s ease-in-out;
  color: white;

  a {
    color: white;
    text-decoration: none;
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

  &:hover {
    box-shadow: 0 0 7px 0.5px rgba(0, 0, 0, 0.3);
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
