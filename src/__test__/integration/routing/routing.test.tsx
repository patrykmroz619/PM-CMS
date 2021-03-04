import React from "react";
import userEvent from "@testing-library/user-event";

import { renderWithStore } from "@testHelpers";
import state from "@mocks/state";
import PanelPage from "@pages/Panel";
import routes from "@routes";
import { subheadings } from "@content";

describe("routing", () => {
  test("navigate in panel app", async () => {
    const { getByText, container } = renderWithStore(<PanelPage />, {
      initialState: state,
      initialRoute: routes.projects
    });

    expect(getByText(/projects list/i)).toBeInTheDocument();

    const contentLink = container.querySelector(`a[href="${routes.content}"]`);

    if (contentLink) {
      userEvent.click(contentLink);
    } else {
      throw new Error("content link was not found");
    }

    expect(getByText(subheadings.content)).toBeInTheDocument();

    const profileLink = container.querySelector(`a[href="${routes.profile}"]`);

    if (profileLink) {
      userEvent.click(profileLink);
    } else {
      throw new Error("profile link was not found");
    }

    expect(getByText(subheadings.profile)).toBeInTheDocument();

    const settingsLink = container.querySelector(`a[href="${routes.settings}"]`);

    if (settingsLink) {
      userEvent.click(settingsLink);
    } else {
      throw new Error("settings link was not found");
    }

    expect(getByText(subheadings.settings)).toBeInTheDocument();
  });
});
