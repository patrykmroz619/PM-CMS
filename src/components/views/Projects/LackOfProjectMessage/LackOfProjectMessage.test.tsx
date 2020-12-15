import React from "react";

import { render } from "@testHelpers";
import { projectsPage as content } from "@content";
import LackOfProjectMessage from "./index";

describe("<LackOfProjectMessage />", () => {
  test("renders svg icon", () => {
    const { container } = render(<LackOfProjectMessage />);

    const icon = container.querySelector("svg");

    expect(icon).toBeInTheDocument();
  });

  test("renders message", () => {
    const { getByText } = render(<LackOfProjectMessage />);

    const text = getByText(content.lackOfProjects);

    expect(text).toBeInTheDocument();
  });
});
