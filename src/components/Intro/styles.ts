import styled, { css } from "styled-components";

interface ContainerProps {
  backgroundImage: string;
}

export const Container = styled.section<ContainerProps>`
  width: 100%;
  height: 800px;
  max-height: 800px;

  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: url(${props.backgroundImage});
    `}

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: 30%;
`;

export const ContentContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  h1 {
    text-shadow: 0px 0px 16px rgba(42, 217, 255, 0.35);
    font-size: 36px;
  }

  p {
    opacity: 0.7;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-color: transparent;
    text-decoration: none;
    border: 1px solid white;
    color: white;
    border-radius: 10px;

    transition: all 0.2s ease-in-out;

    svg {
      margin-right: 10px;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 01));

      svg {
        transform: rotateZ(360deg);
      }
    }

    margin-top: 30px;
    max-width: 200px;
  }
`;
