import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  html * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto Mono", sans-serif;
  }

  ul, ol {
    list-style: none;
  }

  button, a {
    cursor: pointer;
  }
`;

export default globalStyle;
