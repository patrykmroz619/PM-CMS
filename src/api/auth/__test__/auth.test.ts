import api from "../../index";
import { refreshActiveToken, signIn, signUp } from "../index";

test("sign in function is able to do api request on endpoint /login with passed data", async () => {
  const spy = jest.spyOn(api, "post").mockImplementation(() => Promise.resolve());

  const data: SignInFormData = {
    email: "email",
    password: "password"
  };

  await signIn(data);

  expect(spy).toHaveBeenCalledWith("login", data);
  spy.mockRestore();
});

test("sign in function is able to do api request on endpoint /register with passed data", async () => {
  const spy = jest.spyOn(api, "post").mockImplementation(() => Promise.resolve());

  const data: SignUpFormData = {
    email: "email",
    password: "password",
    passwordRepeated: "password",
    company: "company",
    name: "name"
  };

  await signUp(data);

  expect(spy).toHaveBeenCalledWith("register", data);
  spy.mockRestore();
});

describe("api call to refresh token", () => {
  test("returns a new access token when request was resolved", async () => {
    const VALID_TOKEN = "VALID";
    const spy = jest
      .spyOn(api, "post")
      .mockImplementation(() => Promise.resolve({ data: { activeToken: VALID_TOKEN } }));
    const response = await refreshActiveToken();

    expect(response).toBe(VALID_TOKEN);
    spy.mockRestore();
  });

  test("returns empty string when request was rejected", async () => {
    const spy = jest.spyOn(api, "post").mockImplementation(() => Promise.reject());

    const response = await refreshActiveToken();

    expect(response).toBe("");
    spy.mockRestore();
  });
});
