import React from "react";
import { cleanup, getByTestId, getByText, render } from "@testHelpers";
import { AuthForm } from "./index";
import "jest-styled-components";

afterEach(cleanup);

describe("<AuthForm />", () => {
  test("renders a <form />", () => {
    const { getByTestId } = render(
      <AuthForm loading={0}>
        <p>Render</p>
      </AuthForm>
    );
    const el = getByTestId("form");

    expect(el.tagName).toBe("FORM");
  });

  test("renders a <img />", () => {
    const { getByTestId } = render(
      <AuthForm loading={0}>
        <p>Render</p>
      </AuthForm>
    );

    const el = getByTestId("img");

    expect(el.tagName).toBe("IMG");
  });

  test("renders children", () => {
    const { getByText } = render(
      <AuthForm loading={0}>
        <div>child</div>
      </AuthForm>
    );
    const el = getByText(/child/);

    expect(el.tagName).toBe("DIV");
    expect(el.textContent).toBe("child");
  });

  test("has opacity style when props loading = 1", () => {
    const { getByTestId } = render(<AuthForm loading={1} />);

    const el = getByTestId("form");
    expect(el).toHaveStyleRule("opacity", "0.5", {
      modifier: "*"
    });
  });

  test("has not opacity style when props loading = 0", () => {
    const { getByTestId } = render(<AuthForm loading={0} />);

    const el = getByTestId("form");
    expect(el).toHaveStyleRule("opacity", "1", {
      modifier: "*"
    });
  });
});
