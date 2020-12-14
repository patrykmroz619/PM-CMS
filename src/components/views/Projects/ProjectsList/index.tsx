import React from "react";
import styled from "@myStyled";
import ProjectsListItem from "./ProjectsListItem";

type ProjectsListProps = {
  projects: Project[];
  selectProject: (id: string) => void;
};

const List = styled.ul`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

const ProjectsList = ({ projects, selectProject }: ProjectsListProps) => {
  const listItems = projects.map((project) => (
    <ProjectsListItem key={project.id} project={project} selectProject={selectProject} />
  ));

  return <List>{listItems}</List>;
};

export default ProjectsList;
