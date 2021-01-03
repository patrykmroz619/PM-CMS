import React from "react";
import { renderWithStore } from "@testHelpers";

import { newProjectForm as content } from "@content";
import ProjectFormView from "./index";
import state from "@mocks/state";

describe("<ProjectFormView />", () => {
  test("renders name inpus", () => {
    const { getByPlaceholderText, getByText } = renderWithStore(<ProjectFormView />, {
      initialState: state
    });

    const nameInputLabel = getByText(content.nameInput.label);
    const nameInput = getByPlaceholderText(content.nameInput.placeholder);

    expect(nameInputLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
  });
});
