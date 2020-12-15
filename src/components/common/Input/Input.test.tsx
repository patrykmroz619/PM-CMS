import React from "react";

import { render } from "@testHelpers";
import { Input } from "./index";

describe("<Input />", () => {
  test("renders input components", () => {
    const { getByTestId } = render(<Input />);

    const input = getByTestId("input");

    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
  });

  test("displays errors", () => {
    const { getByText } = render(<Input isTouched={true} error="error" />);

    const errorEl = getByText("error");

    expect(errorEl).toBeInTheDocument();
    expect(errorEl.textContent).toBe("error");
  });
});
