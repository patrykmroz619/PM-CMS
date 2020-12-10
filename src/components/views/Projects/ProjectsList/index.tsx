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

const ProjectsList = ({ projects, selectProject }: ProjectsListProps) => (
  <List>
    {projects.map((project) => (
      <ProjectsListItem key={project.id} project={project} selectProject={selectProject} />
    ))}
  </List>
);

export default ProjectsList;
