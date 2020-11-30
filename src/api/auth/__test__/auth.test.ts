import api from "../../index";
import { refreshActiveToken, signIn, signUp } from "../index";

test("sign in function is able to do api call on endpoint /login with passed data", async () => {
  const spy = jest.spyOn(api, "post").mockImplementation(() => Promise.resolve());

  const data: SignInFormData = {
    email: "email",
    password: "password"
  };

  await signIn(data);

  expect(spy).toHaveBeenCalledWith("login", data);
});

test("sign in function is able to do api call on endpoint /register with passed data", async () => {
  const spy = jest.spyOn(api, "post").mockImplementation(() => Promise.resolve());

  const data: SignUpFormData = {
    email: "email",
    password: "password",
    company: "company",
    name: "name"
  };

  await signUp(data);

  expect(spy).toHaveBeenCalledWith("register", data);
});

describe("api call to refresh token", () => {
  test("returns a new access token when call was resolved", async () => {
    const VALID_TOKEN = "VALID";
    const spy = jest
      .spyOn(api, "post")
      .mockImplementation(() => Promise.resolve({ data: { activeToken: VALID_TOKEN } }));
    const response = await refreshActiveToken();

    expect(response).toBe(VALID_TOKEN);
    spy.mockRestore();
  });

  test("returns empty string when cal was rejected", async () => {
    const spy = jest.spyOn(api, "post").mockImplementation(() => Promise.reject());

    const response = await refreshActiveToken();

    expect(response).toBe("");
    spy.mockRestore();
  });
});
