import React, { ChangeEvent, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFilter, useWindowWidth } from "@hooks";
import { projectsSelector } from "@selectors";
import { getProjects } from "@fetch";

import ProjectsList from "./ProjectsList";
import ProjectsTable from "./ProjectsTable";
import LackOfProjectMessage from "./LackOfProjectMessage";
import * as S from "./styled";

const MOBILE_VW = 800;

const ProjectsView = () => {
  const projects = useSelector(projectsSelector.projects);
  const [filteredProjects, handleFilter] = useFilter(projects, "name");
  const selectProject = useCallback((id: string) => console.log("selected: " + id), []);

  const areProjects = projects.length > 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const windowWidth = useWindowWidth();
  if (!windowWidth) return null;
  const mobileView = windowWidth < MOBILE_VW;

  const Projects = mobileView ? (
    <ProjectsList selectProject={selectProject} projects={filteredProjects} />
  ) : (
    <ProjectsTable selectProject={selectProject} projects={filteredProjects} />
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => handleFilter(e.target.value);

  return (
    <S.ContentWrapper $mobile={mobileView} areProjects={areProjects}>
      <S.Search $mobile={mobileView} placeholder="SEARCH ..." onChange={handleChange} />
      {!areProjects ? <LackOfProjectMessage /> : Projects}
      <S.AddButton $mobile={mobileView}>+ ADD PROJECT</S.AddButton>
    </S.ContentWrapper>
  );
};

export default ProjectsView;
