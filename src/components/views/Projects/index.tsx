import React, { ChangeEvent, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { projectsPage as content } from "@content";
import routes from "@routes";
import { useFilter, useWindowWidth } from "@hooks";
import { projectsSelector } from "@selectors";
import { getProjects } from "@fetch";

import ProjectsList from "./ProjectsList";
import ProjectsTable from "./ProjectsTable";
import LackOfProjectMessage from "./LackOfProjectMessage";
import * as S from "./styled";
import { Spinner } from "@common";

const MOBILE_VW = 800;

const ProjectsView = () => {
  const projectsLoading = useSelector(projectsSelector.loading);
  const projects = useSelector(projectsSelector.projects);

  const [filteredProjects, handleFilter] = useFilter(projects, "name");

  const selectProject = useCallback((id: string) => console.log("selected: " + id), []);

  const areProjects = projects.length > 0;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!areProjects) {
      dispatch(getProjects());
    }
  }, []);

  const windowWidth = useWindowWidth();

  if (projectsLoading || !windowWidth) {
    return <Spinner />;
  }

  const isMobile = windowWidth < MOBILE_VW;

  const Projects = isMobile ? (
    <ProjectsList selectProject={selectProject} projects={filteredProjects} />
  ) : (
    <ProjectsTable selectProject={selectProject} projects={filteredProjects} />
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => handleFilter(e.target.value);

  return (
    <S.ContentWrapper $mobile={isMobile} areProjects={areProjects}>
      <S.Search $mobile={isMobile} placeholder="SEARCH ..." onChange={handleChange} />
      {!areProjects ? <LackOfProjectMessage /> : Projects}
      <S.AddButton to={routes.newProject} $mobile={isMobile}>
        {content.addProjecBtn}
      </S.AddButton>
    </S.ContentWrapper>
  );
};

export default ProjectsView;
