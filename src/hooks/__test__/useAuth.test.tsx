import { renderHook } from "@testing-library/react-hooks";
import { useAuth } from "../useAuth";

const authFunctionMock = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => authFunctionMock,
  useSelector: jest.fn()
}));

describe("useAuth hook", () => {
  test("dispatch auth function once despite rerenders", () => {
    const { rerender } = renderHook(() => useAuth());

    expect(authFunctionMock).toHaveBeenCalledTimes(1);

    rerender();

    expect(authFunctionMock).toHaveBeenCalledTimes(1);
  });
});
