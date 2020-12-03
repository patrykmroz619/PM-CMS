import React from "react";

import userEvent from "@testing-library/user-event";

import RegisterForm from "@pages/Register/RegisterForm";
import { fireEvent, RenderResult, renderWithStore, waitFor, act } from "@testHelpers";

import { signUpPageContent as content } from "@content";
import * as fetch from "@fetch";

describe("Sign up integration tests:", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = renderWithStore(<RegisterForm />, {
      initialState: {},
      initialRoute: "/register"
    });
  });

  test("type correct data and call sign up function", async () => {
    const spy = jest.spyOn(fetch, "signUpUser").mockImplementation();

    const data: SignUpFormData = {
      email: "example@mail.com",
      password: "Password1!",
      passwordRepeated: "Password1!",
      name: "Name",
      surname: "Surname",
      company: "Company name"
    };

    const { getByPlaceholderText, getByText } = renderResult;

    let emailInput = getByPlaceholderText(content.placeholders.email);
    let passwordInput = getByPlaceholderText(content.placeholders.password);
    let repeatedPasswordInput = getByPlaceholderText(content.placeholders.repeatPassword);

    fireEvent.change(emailInput, { target: { value: data.email } });
    fireEvent.change(passwordInput, { target: { value: data.password } });
    fireEvent.change(repeatedPasswordInput, { target: { value: data.password } });

    emailInput = await waitFor(() => getByPlaceholderText(content.placeholders.email));
    if (emailInput instanceof HTMLInputElement) {
      expect(emailInput.value).toBe(data.email);
    } else {
      throw new Error("Element should be input");
    }

    passwordInput = getByPlaceholderText(content.placeholders.password);
    if (passwordInput instanceof HTMLInputElement) {
      expect(passwordInput.value).toBe(data.password);
    } else {
      throw new Error("Element should be input");
    }

    repeatedPasswordInput = getByPlaceholderText(content.placeholders.repeatPassword);
    if (repeatedPasswordInput instanceof HTMLInputElement) {
      expect(repeatedPasswordInput.value).toBe(data.password);
    } else {
      throw new Error("Element should be input");
    }

    const nextButton = getByText(content.next);

    userEvent.click(nextButton);

    let nameInput = await waitFor(() => getByPlaceholderText(content.placeholders.name));
    let surnameInput = getByPlaceholderText(content.placeholders.surname);
    let companyInput = getByPlaceholderText(content.placeholders.company);

    fireEvent.change(nameInput, { target: { value: data.name } });
    fireEvent.change(surnameInput, { target: { value: data.surname } });
    fireEvent.change(companyInput, { target: { value: data.company } });

    nameInput = await waitFor(() => getByPlaceholderText(content.placeholders.name), {
      timeout: 2000
    });
    if (nameInput instanceof HTMLInputElement) {
      expect(nameInput.value).toBe(data.name);
    } else {
      throw new Error("Element should be input");
    }

    surnameInput = getByPlaceholderText(content.placeholders.surname);
    if (surnameInput instanceof HTMLInputElement) {
      expect(surnameInput.value).toBe(data.surname);
    } else {
      throw new Error("Element should be input");
    }

    companyInput = getByPlaceholderText(content.placeholders.company);
    if (companyInput instanceof HTMLInputElement) {
      expect(companyInput.value).toBe(data.company);
    } else {
      throw new Error("Element should be input");
    }

    const submitButton = getByText(content.submitText);

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(data);
    });
  });
});
