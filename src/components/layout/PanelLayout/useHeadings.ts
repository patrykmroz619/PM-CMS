import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "@routes";
import { subheadings } from "@content";
import { currentProjectSelector } from "@selectors";

const getHeading = (pathname: string, currentProjectName?: string) => {
  if (pathname === routes.projects || !currentProjectName) {
    return subheadings.projects;
  }
  return currentProjectName;
};

const getSubheading = (pathname: string) => {
  switch (pathname) {
    case routes.projects:
      return "";
    case routes.newProject:
      return subheadings.newProject;
    case routes.newContentModel:
      return subheadings.newContentModel;
    case routes.records:
      return subheadings.content;
    case routes.modelFields:
      return subheadings.content;
    case routes.profile:
      return subheadings.profile;
    case routes.settings:
      return subheadings.settings;
    default:
      return "";
  }
};

const useHeadings = () => {
  const { pathname } = useLocation();
  const currentProjectName = useSelector(currentProjectSelector.name);

  const heading = useMemo(() => getHeading(pathname, currentProjectName), [pathname]);
  const subheading = useMemo(() => getSubheading(pathname), [pathname]);

  return [heading, subheading];
};

export default useHeadings;
