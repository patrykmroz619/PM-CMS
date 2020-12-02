import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import * as Redux from "react-redux";

import { renderWithStore } from "@testHelpers";
import { PrivateRoute } from "./index";

describe("<PrivateRoute />", () => {
  test("renders children when user is authenticated", () => {
    const isAuthenticated = true;
    const spy = jest.spyOn(Redux, "useSelector").mockReturnValue(isAuthenticated);

    const route = "/";
    const testId = "test";
    const content = "Content";

    const { getByTestId } = renderWithStore(
      <MemoryRouter initialEntries={[route]}>
        <PrivateRoute path={route}>
          <div data-testid={testId}>{content}</div>
        </PrivateRoute>
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

  test("redirect to /login route when user is not authenticated", () => {
    const isAuthenticated = false;
    const spy = jest.spyOn(Redux, "useSelector").mockReturnValue(isAuthenticated);

    const initRoute = "/app";
    const expectedRoute = "/login";
    const testId = "test";

    const { getByTestId } = renderWithStore(
      <MemoryRouter initialEntries={[initRoute]}>
        <PrivateRoute path={initRoute}>
          <p>App</p>
        </PrivateRoute>
        <Route path={expectedRoute}>
          <p data-testid={testId}>Login</p>
        </Route>
      </MemoryRouter>,
      {
        initialState: {}
      }
    );

    const el = getByTestId(testId);

    expect(el.tagName).toBe("P");
    expect(el.textContent).toBe("Login");

    spy.mockRestore();
  });
});
