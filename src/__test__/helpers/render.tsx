import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "../../style/theme";
import { createStore, Store } from "@reduxjs/toolkit";
import rootReducer from "../../store/slices";
import { MemoryRouter } from "react-router-dom";

const Providers: React.FC<{ initialRoute?: string }> = ({ children, initialRoute = "/" }) => (
  <MemoryRouter initialEntries={[initialRoute]}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </MemoryRouter>
);

const customRender = (component: ReactElement, options?: RenderOptions) =>
  render(component, { wrapper: Providers, ...options });

type Options = {
  initialState: Record<string, unknown>;
  store?: Store;
  initialRoute?: string;
} & RenderOptions;

const renderWithStore = (
  Component: ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    initialRoute,
    ...renderOptions
  }: Options
) => {
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <Providers initialRoute={initialRoute}>{children}</Providers>
    </Provider>
  );

  return render(Component, {
    wrapper: Wrapper,
    ...renderOptions
  });
};

export * from "@testing-library/react";

export { customRender as render, renderWithStore };
