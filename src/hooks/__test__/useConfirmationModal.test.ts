import { renderHook, act } from "@testing-library/react-hooks";

import { useConfirmationModalHandler } from "../useConfirmationModalHandler";

describe("useConfirmationModalHandler hook", () => {
  test("returns state of modal opening and controls functions", () => {
    const onConfirm = () => null;
    const { result } = renderHook(() => useConfirmationModalHandler(onConfirm));

    const [isModalOpen, open, close, confirm] = result.current;

    expect(typeof isModalOpen).toBe("boolean");
    expect(typeof open).toBe("function");
    expect(typeof close).toBe("function");
    expect(typeof confirm).toBe("function");
  });

  test("change modal state on true after the open function was called.", () => {
    const onConfirm = () => null;
    const { result } = renderHook(() => useConfirmationModalHandler(onConfirm));

    let [isModalOpen, open] = result.current;
    expect(isModalOpen).toBe(false);

    act(() => open());

    [isModalOpen, open] = result.current;
    expect(isModalOpen).toBe(true);
  });

  test("change modal state on false after the close function was called.", () => {
    const onConfirm = () => null;
    const { result } = renderHook(() => useConfirmationModalHandler(onConfirm));

    let [isModalOpen, open, close] = result.current;

    act(() => open());
    act(() => close());

    [isModalOpen, open, close] = result.current;
    expect(isModalOpen).toBe(false);
  });

  test("calls the onConfirm function when modal was confirmed.", () => {
    const onConfirmMock = jest.fn();
    const { result } = renderHook(() => useConfirmationModalHandler(onConfirmMock));

    const [, , , confirm] = result.current;

    act(() => confirm());

    expect(onConfirmMock).toHaveBeenCalled();
  });
});
