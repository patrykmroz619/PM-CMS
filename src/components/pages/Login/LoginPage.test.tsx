import React from "react";
import LoginPage from "./index";
import { RenderResult, renderWithStore } from "@testHelpers";
import { singInPageContent as content } from "@content";

describe("login page", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = renderWithStore(<LoginPage />, {
      initialState: {},
      initialRoute: "/login"
    });
  });

  test("renders greeting", () => {
    const greet = renderResult.getByText(content.greeting);

    expect(greet).toBeInTheDocument();
  });

  test("renders email and password input", () => {
    const emailInput = renderResult.getByPlaceholderText(content.placeholders.email);
    const passwordInput = renderResult.getByPlaceholderText(content.placeholders.password);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders submit button", () => {
    const submitButton = renderResult.getByText(content.submitText);

    expect(submitButton).toBeInTheDocument();
  });

  test("renders link to register page", () => {
    const link = renderResult.container.querySelector("a");

    expect(link?.tagName).toBe("A");
    expect(link?.textContent).toEqual(expect.stringMatching("Register"));
  });
});
