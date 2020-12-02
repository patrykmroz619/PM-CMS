import React from "react";
import LoginPage from "./index";
import { RenderResult, renderWithStore } from "@testHelpers";

describe("login page", () => {
  let queries: RenderResult;

  beforeEach(() => {
    queries = renderWithStore(<LoginPage />, {
      initialState: {},
      initialRoute: "/login"
    });
  });

  test("renders greeting", () => {
    const greet = queries.getByText(/Welcome back!/);

    expect(greet).toBeInTheDocument();
    expect(greet.textContent).toBe("Welcome back!");
  });

  test("renders email and password input", () => {
    const emailInput = queries.getByPlaceholderText(/E - mail/);
    const passwordInput = queries.getByPlaceholderText(/Password/);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders submit button", () => {
    const submitButton = queries.getByText("LOGIN");

    expect(submitButton).toBeInTheDocument();
  });

  test("renders link to register page", () => {
    const link = queries.container.querySelector("a");

    expect(link?.tagName).toBe("A");
    expect(link?.textContent).toEqual(expect.stringMatching("Register"));
  });
});
