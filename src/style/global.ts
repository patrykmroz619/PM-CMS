import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  html * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto Mono", sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;

export default globalStyle;
