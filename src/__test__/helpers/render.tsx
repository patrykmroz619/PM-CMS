import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import theme from "../../style/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (component: ReactElement, options?: RenderOptions) =>
  render(component, { wrapper: Providers, ...options });

export * from "@testing-library/react";

export { customRender as render };
