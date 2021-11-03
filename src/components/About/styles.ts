import styled, { css } from "styled-components";

interface AboutContainerProps {
  visible: boolean;
}

export const Container = styled.div`
  background-color: #ffff;
`;

export const AboutContainer = styled.div<AboutContainerProps>`
  display: flex;
  background-color: #fff;
  padding: 80px 40px;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  transform: translateX(-30px);
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
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
  margin-top: 10px;
  display: flex;
  width: 100%;
  a {
    display: flex;
    align-items: center;
    font-size: 30px;
    transition: all 0.3s ease;
    color: #b1b1b1;
    &:hover {
      color: #101010;
    }

    & + a {
      margin-left: 20px;
    }
  }
`;
