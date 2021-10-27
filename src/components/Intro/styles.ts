import styled from "styled-components";

import HomeBackground from "../../assets/home.jpg";

export const Container = styled.section`
  width: 100%;
  height: 800px;
  max-height: 800px;
  display: flex;
  padding: 10px;

  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: 30%;
`;

export const ContentContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 30px auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;

  h1 {
    text-shadow: 0px 0px 16px rgba(42, 217, 255, 0.35);
    font-size: 36px;
  }

  p {
    opacity: 0.7;
  }

  button {
    svg {
      margin-right: 10px;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      svg {
        transform: rotateZ(360deg);
      }
    }

    margin-top: 30px;
    max-width: 200px;
  }
`;
