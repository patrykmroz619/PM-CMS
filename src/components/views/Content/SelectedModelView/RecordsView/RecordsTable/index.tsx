import React from "react";

import { ScrollableTable } from "@common";

import * as S from "./styled";

type RecordsTableProps = {
  records: RecordObject[];
  preview: string;
};

const RecordsTable = ({ records, preview }: RecordsTableProps) => {
  const recordsWithPreview = records.map((record) => {
    const previewRecord = record.data.find((dataItem) => dataItem.name === preview);

    return { ...record, preview: previewRecord?.value || null };
  });

  const tableRows = recordsWithPreview.map((record) => (
    <ScrollableTable.TR key={record.id}>
      <ScrollableTable.TD>{String(record.preview)}</ScrollableTable.TD>
      <ScrollableTable.TD>{new Date().toLocaleDateString()}</ScrollableTable.TD>
    </ScrollableTable.TR>
  ));

  return (
    <S.TableWrapper>
      <ScrollableTable.Table>
        <ScrollableTable.THead>
          <ScrollableTable.TR>
            <ScrollableTable.TH>Preview</ScrollableTable.TH>
            <ScrollableTable.TH>Created at</ScrollableTable.TH>
          </ScrollableTable.TR>
        </ScrollableTable.THead>
        <ScrollableTable.TBody>{tableRows}</ScrollableTable.TBody>
      </ScrollableTable.Table>
    </S.TableWrapper>
  );
};

export default RecordsTable;
