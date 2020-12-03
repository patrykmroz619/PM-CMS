import React from "react";
import LoginPage from "./index";
import { RenderResult, renderWithStore } from "@testHelpers";

describe("login page", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = renderWithStore(<LoginPage />, {
      initialState: {},
      initialRoute: "/login"
    });
  });

  test("renders greeting", () => {
    const greet = renderResult.getByText(/Welcome back!/);

    expect(greet).toBeInTheDocument();
    expect(greet.textContent).toBe("Welcome back!");
  });

  test("renders email and password input", () => {
    const emailInput = renderResult.getByPlaceholderText(/E - mail/);
    const passwordInput = renderResult.getByPlaceholderText(/Password/);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders submit button", () => {
    const submitButton = renderResult.getByText("LOGIN");

    expect(submitButton).toBeInTheDocument();
  });

  test("renders link to register page", () => {
    const link = renderResult.container.querySelector("a");

    expect(link?.tagName).toBe("A");
    expect(link?.textContent).toEqual(expect.stringMatching("Register"));
  });
});
