import { render, renderWithStore } from "@testHelpers";
import React from "react";

import { newProjectForm as content } from "@content";
import ProjectFormView from "./index";
import state from "@mocks/state";
import userEvent from "@testing-library/user-event";
import { slugify } from "@utils";

describe("<ProjectFormView />", () => {
  test("renders name and endpoint inputs", () => {
    const { getByPlaceholderText, getByText, getByLabelText } = renderWithStore(
      <ProjectFormView />,
      { initialState: state }
    );

    const nameInputLabel = getByText(content.nameInput.label);
    const nameInput = getByPlaceholderText(content.nameInput.placeholder);

    const endpointInput = getByLabelText(content.endpointInput.label);

    expect(nameInputLabel).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(endpointInput).toBeInTheDocument();
  });

  test("displays default api endpoint when user types project name", () => {
    const { getByLabelText } = renderWithStore(<ProjectFormView />, { initialState: state });

    const nameInput = getByLabelText(content.nameInput.label);

    userEvent.type(nameInput, "Project 1");

    const endpointInput = getByLabelText(content.endpointInput.label) as HTMLInputElement;

    expect(endpointInput.value).toBe(slugify("Project 1"));
  });
});
