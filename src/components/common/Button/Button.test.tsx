import { render } from "@testHelpers";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Button } from "./index";

describe("<Button />", () => {
  test("renders <button> when props 'to' is not passed", () => {
    const { getByText } = render(<Button>Click</Button>);

    const button = getByText(/Click/);

    expect(button.tagName).toBe("BUTTON");
    expect(button.textContent).toBe("Click");
  });

  test("renders <a> when props 'to' is received", () => {
    const { container } = render(
      <MemoryRouter>
        <Button to="/route">Link</Button>
      </MemoryRouter>
    );

    const button = container.querySelector("a");

    expect(button).toBeInTheDocument();
    expect(button?.textContent).toBe("Link");
  });

  test("is inline when props inline is passed", () => {
    const { getByText } = render(<Button inline>Click</Button>);

    const button = getByText(/Click/);

    expect(button).toHaveStyleRule("display", "inline");
  });

  test("is block when props inline is not passed", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Button to="/route">Link</Button>
      </MemoryRouter>
    );

    const button = getByText(/Link/);

    expect(button).not.toHaveStyleRule("display", "inline");
  });
});
