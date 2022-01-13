import styled from "styled-components";

export const ContentContainer = styled.section`
  max-width: 1240px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  h1 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  h2 {
    margin-top: 30px;
    font-weight: 500;
    margin-bottom: 10px;
    opacity: 0.5;
  }

  pre {
    margin: 20px 0;
    background-color: #f5f5f5;
    padding: 20px;
  }

  ul {
    margin: 20px;
  }
`;
