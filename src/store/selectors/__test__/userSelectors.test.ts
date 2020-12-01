import { CombinedState } from "@reduxjs/toolkit";
import selectors from "../userSelectors";

const state: CombinedState<RootState> = {
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

const { selectIsAuthenticated, selectLoading, selectData, selectError, selectUser } = selectors;

describe("user selectors for useSelector hook", () => {
  test("selectUser", () => {
    expect(selectUser(state)).toBe(state.user);
  });

  test("selectIsAuthenticated", () => {
    expect(selectIsAuthenticated(state)).toBe(state.user.isAuthenticated);
  });

  test("selectLoading", () => {
    expect(selectLoading(state)).toBe(state.user.loading);
  });

  test("selectData", () => {
    expect(selectData(state)).toBe(state.user.data);
  });

  test("selectError", () => {
    expect(selectError(state)).toBe(state.user.error);
  });
});
