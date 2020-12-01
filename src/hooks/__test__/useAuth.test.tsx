import React from "react";
import { renderWithStore } from "@testHelpers";
import * as Redux from "react-redux";

import { useAuth } from "../useAuth";

describe("useAuth hook", () => {
  test("dispatch auth function once despite rerenders", () => {
    const authFunctionMock = jest.fn();
    const spy = jest.spyOn(Redux, "useDispatch").mockImplementation(() => authFunctionMock);

    const App = () => {
      useAuth();
      return <div>App</div>;
    };

    const { rerender } = renderWithStore(<App />, { initialState: {} });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(authFunctionMock).toHaveBeenCalledTimes(1);

    rerender(<App />);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(authFunctionMock).toHaveBeenCalledTimes(1);
  });
});
