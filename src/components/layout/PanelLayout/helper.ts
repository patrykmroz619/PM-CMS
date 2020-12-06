import routes from "@routes";
import { subheadings } from "@content";

export const getSubheading = (patchname: string) => {
  switch (patchname) {
    case routes.projects:
      return "";
    case routes.content:
      return subheadings.content;
    case routes.media:
      return subheadings.media;
    case routes.profile:
      return subheadings.profile;
    case routes.settings:
      return subheadings.settings;
    default:
      return "undefined"; // For dev
  }
};
