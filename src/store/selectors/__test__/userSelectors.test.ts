import userSelector from "../userSelectors";

const state: Pick<RootState, "user"> = {
  user: {
    isAuthenticated: false,
    loading: false,
    data: {
      name: "name",
      email: "email",
      surname: "surname"
    },
    error: "error"
  }
};

describe("user selectors for useSelector hook", () => {
  test("select all user state", () => {
    expect(userSelector.user(state as RootState)).toBe(state.user);
  });

  test("select is user authenticated", () => {
    expect(userSelector.isAuthenticated(state as RootState)).toBe(state.user.isAuthenticated);
  });

  test("select is user data loading", () => {
    expect(userSelector.loading(state as RootState)).toBe(state.user.loading);
  });

  test("select user data", () => {
    expect(userSelector.data(state as RootState)).toBe(state.user.data);
  });

  test("select is error occured", () => {
    expect(userSelector.error(state as RootState)).toBe(state.user.error);
  });
});
