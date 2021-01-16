import React, { useRef } from "react";

import useFixColumnWidth from "./useFixColumnWidth";
import * as S from "./styled";

type TableProps = {
  children: React.ReactNode;
  className?: string;
};

const Table = ({ children, className }: TableProps) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useFixColumnWidth(tableRef);

  return (
    <S.Wrapper className={className}>
      <S.ScrollableBox>
        <S.Table ref={tableRef}>{children}</S.Table>
      </S.ScrollableBox>
    </S.Wrapper>
  );
};

export const ScrollableTable = {
  Table: Table,
  THead: S.THead,
  TH: S.TH,
  TBody: S.TBody,
  TR: S.TR,
  TD: S.TD
};
