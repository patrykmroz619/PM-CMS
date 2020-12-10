import React from "react";
import * as S from "./styled";

type ProjectsTableRowProps = {
  project: Project;
  selectProject: (id: string) => void;
};

const ProjectsTableRow = ({ project, selectProject }: ProjectsTableRowProps) => (
  <S.TR onClick={() => selectProject(project.id)}>
    <S.TD>{project.name}</S.TD>
    <S.TD>{project.createdAt}</S.TD>
    <S.TD>{project.updatedAt}</S.TD>
    <S.TD>{project.endpoint}</S.TD>
  </S.TR>
);

export default ProjectsTableRow;
