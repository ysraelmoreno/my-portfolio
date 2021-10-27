import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #101010;
    color: white;
    font-family: 'Poppins';
  }

  button {
    cursor: pointer;
  }
`;
