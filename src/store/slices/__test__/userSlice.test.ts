import userSlice from "../userSlice";
import { AUTH } from "../../constants/auth";

describe("userSlice:", () => {
  const reducer = userSlice.reducer;

  describe("auth action pending", () => {
    test("changes isAuthenticated on false and loading on true", () => {
      const action = {
        type: AUTH.PENDING
      };

      const result = reducer({ isAuthenticated: true, loading: false }, action);

      expect(result.isAuthenticated).toBeFalsy();
      expect(result.loading).toBeTruthy();
    });
  });

  describe("auth action fulfilled", () => {
    test("changes isAuthenticated on true loading on false", () => {
      const action = {
        type: AUTH.FULFILLED
      };

      const result = reducer({ isAuthenticated: false, loading: true }, action);

      expect(result.isAuthenticated).toBeTruthy();
      expect(result.loading).toBeFalsy();
    });

    test("saves data passed in payload", () => {
      const userData = { email: "email", name: "name" };

      const action = {
        type: AUTH.FULFILLED,
        payload: userData
      };

      const result = reducer({ isAuthenticated: false, loading: true }, action);

      expect(result.data).toEqual(userData);
    });
  });

  describe("auth action rejected", () => {
    test("changes isAuthenticated and loading properties on false", () => {
      const action = {
        type: AUTH.REJECTED
      };

      const result = reducer({ isAuthenticated: false, loading: true }, action);

      expect(result.isAuthenticated).toBeFalsy();
      expect(result.loading).toBeFalsy();
    });

    test("saves error message passed in payload", () => {
      const apiError: ApiError = {
        statusCode: 0,
        error: {
          type: "TYPE",
          description: "Error"
        }
      };

      const action = {
        type: AUTH.REJECTED,
        payload: apiError
      };

      const result = reducer({ isAuthenticated: false, loading: true }, action);

      expect(result.error).toEqual(apiError.error.description);
    });
  });
});
