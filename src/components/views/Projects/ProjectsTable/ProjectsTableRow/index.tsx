import React from "react";

import { convertToDate } from "@utils";
import * as S from "./styled";

type ProjectsTableRowProps = {
  project: Project;
  selectProject: (id: string) => void;
};

const ProjectsTableRow = ({ project, selectProject }: ProjectsTableRowProps) => (
  <S.TR onClick={() => selectProject(project.id)}>
    <S.TD>{project.name}</S.TD>
    <S.TD>{convertToDate(Number(project.createdAt))}</S.TD>
    <S.TD>{project.published ? "Yes" : "No"}</S.TD>
  </S.TR>
);

export default ProjectsTableRow;
