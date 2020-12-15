import React from "react";
import { render } from "@testHelpers";
import { Form } from "./index";

describe("<Form />:", () => {
  test("renders form component", () => {
    const { container } = render(<Form />);

    const form = container.querySelector("form");

    expect(form).toBeInTheDocument();
    expect(form?.tagName).toBe("FORM");
  });

  test("renders children", () => {
    const { getByText } = render(
      <Form>
        <p>Child</p>
      </Form>
    );

    const p = getByText(/Child/);

    expect(p).toBeInTheDocument();
  });
});
