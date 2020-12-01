import React from "react";

import { render } from "@testHelpers";
import { InputWithIcon } from "../index";
import Icon from "@assets/login.svg";

describe("<InputWithIcon />", () => {
  test("renders input element", () => {
    const { getByTestId } = render(<InputWithIcon icon={Icon} />);

    const input = getByTestId("input");

    expect(input.tagName).toBe("INPUT");
  });

  test("renders error", () => {
    const { getByText } = render(<InputWithIcon icon={Icon} isTouched error="Error" />);

    const error = getByText(/Error/);
    expect(error.textContent).toBe("Error");
  });

  test("renders svg icon component", () => {
    const { getByTestId } = render(<InputWithIcon icon={Icon} />);

    const svg = getByTestId("svg");
    expect(svg.tagName).toBe("svg");
  });
});
