import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffff;
`;

export const AboutContainer = styled.div`
  display: flex;
  background-color: #fff;
  padding: 40px;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  div {
    height: 100%;
    picture {
      img {
        border-radius: 10px;
        object-fit: cover;
      }
    }
  }
`;

export const TextContainer = styled.div`
  color: #101010;
  margin-left: 38px;

  span {
    opacity: 0.4;
    display: flex;
    margin-bottom: 14px;
  }

  p {
    opacity: 0.5;
  }
`;

export const SocialMediaContainer = styled.div`
  svg {
    margin-top: 10px;
    font-size: 30px;

    & + svg {
      margin-left: 20px;
    }
  }
`;
