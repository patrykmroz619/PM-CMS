import { notificationsActions } from "@actions";
import { renderHook } from "@testing-library/react-hooks";
import { useNotification } from "../useNotification";

const useDispatchMock = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => useDispatchMock
}));

describe("useNotification hook", () => {
  test("returns two functions to success and error notify", () => {
    const { result } = renderHook(() => useNotification());

    result.current.success("success message");

    expect(result.current).toHaveProperty("success");
    expect(result.current).toHaveProperty("error");
  });

  test("dispatch notification actions", () => {
    useDispatchMock.mockClear();

    const { result } = renderHook(() => useNotification());

    result.current.success("success message");

    expect(useDispatchMock).toHaveBeenCalledTimes(1);
    expect(useDispatchMock).toHaveBeenNthCalledWith(
      1,
      notificationsActions.success("success message")
    );

    result.current.error("error message");

    expect(useDispatchMock).toHaveBeenCalledTimes(2);
    expect(useDispatchMock).toHaveBeenLastCalledWith(notificationsActions.error("error message"));
  });
});
