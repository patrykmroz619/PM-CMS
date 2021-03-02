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
      <S.Label>Published: </S.Label>
      {project.published}
    </S.Detail>
  </S.Wrapper>
);

export default ProjectsListItem;
