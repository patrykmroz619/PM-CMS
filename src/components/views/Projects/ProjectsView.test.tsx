import React from "react";

import { RenderResult, renderWithStore } from "@testHelpers";
import state from "@mocks/state";
import { projectsPage as content } from "@content";
import ProjectsView from "./index";

const { projects } = state;

describe("ProjectsView", () => {
  let renderResults: RenderResult;

  beforeEach(() => {
    renderResults = renderWithStore(<ProjectsView />, { initialState: state });
  });

  test("renders project list", () => {
    const { getByText } = renderResults;

    for (let i = 0; i < projects.data.length; i++) {
      expect(getByText(projects.data[i].name)).toBeInTheDocument();
    }
  });

  test("renders search input", () => {
    const { container } = renderResults;

    const input = container.querySelector("input");

    expect(input).toBeInTheDocument();
  });

  test("renders add project link", () => {
    const { getByText } = renderResults;

    const link = getByText(content.addProjecBtn);

    expect(link).toBeInTheDocument();
  });
});
