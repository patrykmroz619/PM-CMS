import React from "react";
import { render } from "@testHelpers";

import { Spinner } from "./index";

describe("<Spinner />", () => {
  test("renders two child elements", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");
    expect(spinner.firstChild).toBeInTheDocument();
    expect(spinner.lastChild).toBeInTheDocument();
    expect(spinner.childNodes.length).toBe(2);
  });

  test("children are infinite animated", () => {
    const { getByTestId } = render(<Spinner />);

    const spinner = getByTestId("spinner");
    expect(spinner.firstChild).toHaveStyleRule("animation", /infinite/);
    expect(spinner.lastChild).toHaveStyleRule("animation", /infinite/);
  });
});
