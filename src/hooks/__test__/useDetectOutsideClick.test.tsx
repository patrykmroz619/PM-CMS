import { fireEvent } from "@testing-library/dom";
import { renderHook } from "@testing-library/react-hooks";

import { useDetectOutsideClick } from "../useDetectOutsideClick";

describe("useDetectOutsideClick hook", () => {
  test("calls action callback when click outside has occured.", () => {
    const element = document.createElement("div");
    const ref = { current: element };

    const actionMock = jest.fn();

    renderHook(() => useDetectOutsideClick(ref, actionMock));

    fireEvent.click(document);

    expect(actionMock).toHaveBeenCalledTimes(1);

    fireEvent.click(document);

    expect(actionMock).toHaveBeenCalledTimes(2);
  });

  test("not call callback action when element of ref was clicked.", () => {
    const element = document.createElement("div");
    const ref = { current: element };

    const actionMock = jest.fn();

    renderHook(() => useDetectOutsideClick(ref, actionMock));

    fireEvent.click(element);

    expect(actionMock).not.toHaveBeenCalled();
  });
});
