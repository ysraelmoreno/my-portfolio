import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 70px;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  width: 100%;

  picture {
    img {
      object-fit: cover;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 10px;
  width: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  margin-top: 20px;
  opacity: 0.7;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  height: 40px;
  width: 200px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    filter: drop-shadow(0px 0px 7px rgba(255, 255, 255, 01));
  }
`;

export const StacksAndLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

export const IconContainer = styled.div`
  svg + svg {
    margin-left: 10px;
  }
`;
