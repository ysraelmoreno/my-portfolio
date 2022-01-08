import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #101010;
`;

export const ProjectsContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  > h1 {
    font-size: 17px;
    color: white;
    margin-top: 10px;
    opacity: 0.5;
    font-weight: 500;
    text-align: center;
    letter-spacing: 10px;
  }
`;

export const ShowProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;
