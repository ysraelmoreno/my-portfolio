import styled from "styled-components";

interface PostHeaderProps {
  image: string;
}

export const Container = styled.div`
  display: flex;

  flex-direction: column;
  background-color: #fff;
`;

export const HeaderContainer = styled.div<PostHeaderProps>`
  width: 100%;
  height: 800px;
  position: relative;
  background: #000;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    opacity: 0.5;

    background-size: cover;
    background-image: url(${(props) => props.image});
    height: 100%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  z-index: 1;
  max-width: 1240px;
  height: 100%;
  width: 100%;
  justify-content: center;

  h1 {
    font-size: 48px;
    color: #fff;
  }

  h5 {
    font-size: 16px;
    opacity: 0.5;
    color: #fff;
    font-weight: 500;
  }
`;

export const TagsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 50px;
  background-color: transparent;
  color: #fff;
  font-size: 11px;
  opacity: 0.5;

  border: 1px solid #fff;

  & + span {
    margin-left: 10px;
  }
`;

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  max-width: 1240px;
  width: 100%;

  h1 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  pre {
    margin: 20px 0;
    background-color: #f5f5f5;
    padding: 20px;
  }
`;
