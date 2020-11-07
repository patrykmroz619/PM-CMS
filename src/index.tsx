import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import theme from "./style/theme";
import GlobalStyle from "./style/global";

const RootApp = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<RootApp />, document.getElementById("app"));
