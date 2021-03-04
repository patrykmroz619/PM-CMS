import React from "react";
import { renderWithStore, RenderResult, fireEvent, waitFor } from "@testHelpers";
import { singInPageContent as content } from "@content";
import LoginPage from "@pages/Login";
import * as fetch from "@fetch";

describe("Sign in integration tests:", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = renderWithStore(<LoginPage />, { initialState: {}, initialRoute: "/login" });
  });
  test("types correct data and call sign in function after submitting form", async () => {
    const spy = jest.spyOn(fetch, "signInUser").mockImplementation();
    const data: SignInFormData = {
      email: "example@email.com",
      password: "Password1!"
    };

    const { getByPlaceholderText, getByText } = renderResult;

    let emailInput = getByPlaceholderText(content.placeholders.email);
    let passwordInput = getByPlaceholderText(content.placeholders.password);
    const submitButton = getByText(content.submitText);

    fireEvent.change(emailInput, { target: { value: data.email } });
    fireEvent.change(passwordInput, { target: { value: data.password } });

    emailInput = await waitFor(() => getByPlaceholderText(content.placeholders.email));
    if (emailInput instanceof HTMLInputElement) {
      expect(emailInput.value).toBe(data.email);
    } else {
      throw new Error();
    }

    passwordInput = await waitFor(() => getByPlaceholderText(content.placeholders.password));
    if (passwordInput instanceof HTMLInputElement) {
      expect(passwordInput.value).toBe(data.password);
    } else {
      throw new Error();
    }

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(data);
    });
  });

  test("types invalid data and shows error messages below inputs", async () => {
    const data: SignInFormData = {
      email: "example@email",
      password: "Password"
    };

    const { getByPlaceholderText, getByText } = renderResult;

    const emailInput = getByPlaceholderText(/mail/i);
    const passwordInput = getByPlaceholderText(/password/i);
    const submitButton = getByText(/login/i);

    fireEvent.change(emailInput, { target: { value: data.email } });
    fireEvent.change(passwordInput, { target: { value: data.password } });
    fireEvent.click(submitButton);

    const emailErrorMessage = await waitFor(() => getByText(/Invalid email address./));

    expect(emailErrorMessage).toBeInTheDocument();
  });
});
