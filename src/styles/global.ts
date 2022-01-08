import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #fff;
    color: white;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }

  button {
    cursor: pointer;
  }
`;
