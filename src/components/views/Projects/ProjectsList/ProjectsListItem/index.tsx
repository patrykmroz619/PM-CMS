import React from "react";
import * as S from "./styled";

type ProjectsListItemProps = {
  project: Project;
  selectProject: (id: string) => void;
};

const ProjectsListItem = ({ project, selectProject }: ProjectsListItemProps) => (
  <S.Wrapper onClick={() => selectProject(project.id)}>
    <S.Detail>
      <S.Label>Name: </S.Label>
      {project.name}
    </S.Detail>
    <S.Detail>
      <S.Label>Created at: </S.Label>
      {project.createdAt}
    </S.Detail>
    <S.Detail>
      <S.Label>Updated at: </S.Label>
      {project.updatedAt}
    </S.Detail>
    <S.Detail>
      <S.Label>Api endpoint: </S.Label>
      {project.endpoint}
    </S.Detail>
  </S.Wrapper>
);

export default ProjectsListItem;
