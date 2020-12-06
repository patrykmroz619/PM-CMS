import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import store from "store";
import theme from "./style/theme";
import GlobalStyle from "./style/global";

const RootApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<RootApp />, document.getElementById("app"));
