/* eslint-disable @typescript-eslint/no-explicit-any */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { signInUser, signUpUser, authUser } from "../userFetch";

jest.mock("@api/auth");
jest.mock("@api/user");
jest.mock("@utils", () => ({
  tokenHandler: {
    setTokens: jest.fn()
  }
}));

const authApi = require("@api/auth");
const userApi = require("@api/user");

const mockStore = configureStore([thunk]);

describe("signInUser async thunk", () => {
  const userData: SignInFormData = {
    email: "email",
    password: "password"
  };
  test("dispatch pending, and then fulfilled actions when sign in will be succesful", async () => {
    authApi.signIn.mockImplementation(() => Promise.resolve({ data: "data" }));

    const store = mockStore({});

    //It's working correct despite the wrong type. The 'redux/toolkit' library types aren't compatible with 'redux-mock-store' types.
    await store.dispatch(signInUser(userData) as any);

    const actions = store.getActions();

    expect(actions[0].type).toBe(signInUser.pending.toString());
    expect(actions[1].type).toBe(signInUser.fulfilled.toString());
  });

  test("dispatch pending, and then rejected actions when sign in will failed", async () => {
    authApi.signIn.mockImplementation(() => Promise.reject());

    const store = mockStore({});
    await store.dispatch(signInUser(userData) as any);

    const actions = store.getActions();

    expect(actions[0].type).toBe(signInUser.pending.toString());
    expect(actions[1].type).toBe(signInUser.rejected.toString());
  });
});

describe("signUpUser async thunk", () => {
  const userData: SignUpFormData = {
    email: "email",
    password: "password",
    passwordRepeated: "password"
  };
  test("dispatch pending, and then fulfilled actions when sign up will be succesful", async () => {
    authApi.signUp.mockImplementation(() => Promise.resolve({ data: "data" }));

    const store = mockStore({});

    //It's working correct despite the wrong type. The 'redux/toolkit' library types aren't compatible with 'redux-mock-store' types.
    await store.dispatch(signUpUser(userData) as any);

    const actions = store.getActions();

    expect(actions[0].type).toBe(signUpUser.pending.toString());
    expect(actions[1].type).toBe(signUpUser.fulfilled.toString());
  });

  test("dispatch pending, and then rejected action when sign up will failed", async () => {
    authApi.signUp.mockImplementation(() => Promise.reject());

    const store = mockStore({});
    await store.dispatch(signUpUser(userData) as any);

    const actions = store.getActions();

    expect(actions[0].type).toBe(signUpUser.pending.toString());
    expect(actions[1].type).toBe(signUpUser.rejected.toString());
  });
});

describe("authUser async thunk", () => {
  test("dispatch pending, and then fulfilled actions when user authorization will be succesful", async () => {
    userApi.getAuthUser.mockImplementation(() => Promise.resolve({ data: "data" }));

    const store = mockStore({});

    //It's working correct despite the wrong type. The 'redux/toolkit' library types aren't compatible with 'redux-mock-store' types.
    await store.dispatch(authUser() as any);

    const actions = store.getActions();

    expect(actions[0].type).toBe(authUser.pending.toString());
    expect(actions[1].type).toBe(authUser.fulfilled.toString());
  });

  test("dispatch pending, and then rejected action when user authorization will failed", async () => {
    userApi.getAuthUser.mockImplementation(() => Promise.reject());

    const store = mockStore({});
    await store.dispatch(authUser() as any);

    const actions = store.getActions();

    expect(actions[0].type).toBe(authUser.pending.toString());
    expect(actions[1].type).toBe(authUser.rejected.toString());
  });
});
