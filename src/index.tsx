import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import { setViewportHeight } from "@utils";
import store from "./store";
import theme from "./style/theme";
import GlobalStyle from "./style/global";
import { ErrorFallback } from "@common";

if (process.env.MODE === "PRODUCTION") {
  Sentry.init({
    dsn: process.env.SENTRY_DNS,
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE)
  });
}

setViewportHeight();

const RootApp = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Sentry.ErrorBoundary fallback={ErrorFallback}>
            <App />
          </Sentry.ErrorBoundary>
        </ThemeProvider>
      </HashRouter>
    </Provider>
  );
};

ReactDOM.render(<RootApp />, document.getElementById("app"));
