import React, { useRef } from "react";
import ProjectsTableRow from "./ProjectsTableRow";
import * as S from "./styled";
import useFixColumnWidth from "./useFixColumnWidth";

type ProjectsTableProps = {
  projects: Project[];
  selectProject: (id: string) => void;
};

const ProjectsTable = ({ projects, selectProject }: ProjectsTableProps) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useFixColumnWidth(tableRef);

  const tableRows = projects.map((project) => (
    <ProjectsTableRow key={project.id} project={project} selectProject={selectProject} />
  ));

  return (
    <S.Wrapper>
      <S.ScrollableBox>
        <S.Table ref={tableRef}>
          <S.THead>
            <tr>
              <S.TH>Name</S.TH>
              <S.TH>Created at</S.TH>
              <S.TH>Updated at</S.TH>
              <S.TH>API endpoint</S.TH>
            </tr>
          </S.THead>
          <S.TBody>{tableRows}</S.TBody>
        </S.Table>
      </S.ScrollableBox>
    </S.Wrapper>
  );
};

export default ProjectsTable;
