import { render } from "@testHelpers";
import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Button } from "../index";

describe("<Button />", () => {
  test("renders <button> when props 'to' is not received", () => {
    const { getByText } = render(<Button>Click</Button>);

    const button = getByText(/Click/);

    expect(button.tagName).toBe("BUTTON");
    expect(button.textContent).toBe("Click");
  });

  test("renders <a> when props 'to' is received", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Button to="/route">Link</Button>
      </MemoryRouter>
    );

    const button = getByText(/Link/);

    expect(button.tagName).toBe("A");
    expect(button.textContent).toBe("Link");
  });
});
