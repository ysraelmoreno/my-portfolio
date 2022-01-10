import styled, { css } from "styled-components";

interface HeaderContainerProps {
  scrolled: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  z-index: 9999;
  transition: all 0.3s ease-in-out;

  img {
    width: 20%;
    min-width: 200px;
  }

  ${(props) =>
    props.scrolled &&
    css`
      background-color: #101010;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    `}
`;

export const HeaderContent = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 2rem;
  }
`;
