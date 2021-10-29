import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 40%;
  }

  h1 {
    font-size: 18px;
  }

  h4 {
    opacity: 0.7;
    font-weight: 500;
  }

  p {
    opacity: 0.3;
  }
`;
