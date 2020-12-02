import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import * as Redux from "react-redux";

import { renderWithStore } from "@testHelpers";
import { AuthenticationRoute } from "./index";

describe("<AuthenticationRoute />", () => {
  test("renders children when user is not authenticated", () => {
    const isAuthenticated = false;
    const spy = jest.spyOn(Redux, "useSelector").mockReturnValue(isAuthenticated);

    const route = "/login";
    const testId = "test";
    const content = "Login / Register page";

    const { getByTestId } = renderWithStore(
      <MemoryRouter initialEntries={[route]}>
        <AuthenticationRoute path={route}>
          <div data-testid={testId}>{content}</div>
        </AuthenticationRoute>
      </MemoryRouter>,
      {
        initialState: {}
      }
    );

    const el = getByTestId(testId);

    expect(el.tagName).toBe("DIV");
    expect(el.textContent).toBe(content);

    spy.mockRestore();
  });

  test("redirect to /panel route when user is authenticated", () => {
    const isAuthenticated = true;
    const spy = jest.spyOn(Redux, "useSelector").mockReturnValue(isAuthenticated);

    const initRoute = "/login";
    const expectedRoute = "/panel";
    const testId = "test";
    const panelPageContent = "Panel Page";

    const { getByTestId } = renderWithStore(
      <MemoryRouter initialEntries={[initRoute]}>
        <AuthenticationRoute path={initRoute}>
          <div>Login Page</div>
        </AuthenticationRoute>
        <Route path={expectedRoute}>
          <p data-testid={testId}>{panelPageContent}</p>
        </Route>
      </MemoryRouter>,
      {
        initialState: {}
      }
    );

    const el = getByTestId(testId);

    expect(el.tagName).toBe("P");
    expect(el.textContent).toBe(panelPageContent);

    spy.mockRestore();
  });
});
