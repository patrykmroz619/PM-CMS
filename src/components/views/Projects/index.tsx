import React, { ChangeEvent, useCallback } from "react";
import { useSelector } from "react-redux";

import { useFilter, useWindowWidth } from "@hooks";
import { projectsSelector } from "@selectors";
import ProjectsList from "./ProjectsList";
import * as S from "./styled";
import ProjectsTable from "./ProjectsTable";

const MOBILE_VW = 800;

const ProjectsView = () => {
  const windowWidth = useWindowWidth();
  const projects = useSelector(projectsSelector.projects);
  const mobileView = windowWidth < MOBILE_VW;

  const [filteredProjects, handleFilter] = useFilter(projects, "name");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => handleFilter(e.target.value);

  const selectProject = useCallback((id: string) => console.log("selected: " + id), []);

  if (!windowWidth) return null;

  const Projects = mobileView ? (
    <ProjectsList selectProject={selectProject} projects={filteredProjects} />
  ) : (
    <ProjectsTable selectProject={selectProject} projects={filteredProjects} />
  );

  return (
    <S.ContentWrapper $mobile={mobileView}>
      <S.Search $mobile={mobileView} placeholder="SEARCH ..." onChange={handleChange} />
      {Projects}
      <S.AddButton $mobile={mobileView}>+ ADD PROJECT</S.AddButton>
    </S.ContentWrapper>
  );
};

export default ProjectsView;
