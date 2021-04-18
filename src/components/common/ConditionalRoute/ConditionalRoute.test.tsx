import React from "react";

import { render } from "@testHelpers";
import { MemoryRouter, Route } from "react-router-dom";
import { ConditionalRoute } from "./index";

describe("<ConditionalRoute />", () => {
  test("renders children when available props is true", () => {
    const available = true;

    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/path"]}>
        <ConditionalRoute available={available} redirectTo="/" path="/path">
          <div data-testid="child">Child elemement</div>
        </ConditionalRoute>
      </MemoryRouter>
    );

    const childElement = getByTestId("child");

    expect(childElement).toBeInTheDocument();
  });

  test("redirects to passed route when available props is false", () => {
    const available = false;

    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/path"]}>
        <ConditionalRoute available={available} redirectTo="/another-path" path="/path">
          <div data-testid="child">Child elemement</div>
        </ConditionalRoute>
        <Route path="/another-path">
          <div data-testid="anotherChild">Another child</div>
        </Route>
      </MemoryRouter>
    );

    const childElement = getByTestId("anotherChild");

    expect(childElement).toBeInTheDocument();
  });
});
