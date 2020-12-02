import { render } from "@testHelpers";
import React from "react";
import theme from "../../../style/theme";

import { P } from "./index";

describe("<P />", () => {
  test("has property text-align: center in styles when props center is passed", () => {
    const { getByText } = render(<P center>Text</P>);

    const paragraph = getByText(/Text/);
    expect(paragraph).toHaveStyleRule("text-align", "center");
  });

  test("has property text-align: left in styles when props center is not passed", () => {
    const { getByText } = render(<P>Text</P>);

    const paragraph = getByText(/Text/);
    expect(paragraph).toHaveStyleRule("text-align", "left");
  });

  test("displays light text color when props light is passed", () => {
    const { getByText } = render(<P light>Text</P>);

    const paragraph = getByText(/Text/);
    expect(paragraph).toHaveStyleRule("color", theme.color.light);
  });

  test("displays dark text color default", () => {
    const { getByText } = render(<P>Text</P>);

    const paragraph = getByText(/Text/);
    expect(paragraph).toHaveStyleRule("color", theme.color.dark);
  });
});
