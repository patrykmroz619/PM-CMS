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
import { setCurrentProject } from "store/fetch/projectsFetch";
import { useHistory } from "react-router-dom";

const MOBILE_VW = 800;

const ProjectsView = () => {
  const projectsLoading = useSelector(projectsSelector.loading);
  const projects = useSelector(projectsSelector.projects);
  const areThereProjects = projects.length > 0;

  const [filteredProjects, handleFilter] = useFilter(projects, "name");

  const dispatch = useDispatch();
  const history = useHistory();

  const selectProject = useCallback((id: string) => {
    sessionStorage.setItem("selectedProjectId", id);
    dispatch(setCurrentProject(id));
    history.push("/panel/content");
  }, []);

  useEffect(() => {
    if (!areThereProjects) {
      dispatch(getProjects());
    }
  }, []);

  const windowWidth = useWindowWidth();

  if (projectsLoading || !windowWidth) {
    return <Spinner />;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => handleFilter(e.target.value);

  const isMobile = windowWidth < MOBILE_VW;

  const Projects = isMobile ? (
    <ProjectsList selectProject={selectProject} projects={filteredProjects} />
  ) : (
    <ProjectsTable selectProject={selectProject} projects={filteredProjects} />
  );

  return (
    <S.ContentWrapper $mobile={isMobile} areThereProjects={areThereProjects}>
      <S.Search $mobile={isMobile} placeholder="SEARCH ..." onChange={handleInputChange} />
      {!areThereProjects ? <LackOfProjectMessage /> : Projects}
      <S.AddButton to={routes.newProject} $mobile={isMobile}>
        {content.addProjecBtn}
      </S.AddButton>
    </S.ContentWrapper>
  );
};

export default ProjectsView;
