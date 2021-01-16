import React from "react";

import { ScrollableTable } from "@common";

import * as S from "./styled";

type RecordsTableProps = {
  records: RecordObject[];
  preview: string;
};

const RecordsTable = ({ records, preview }: RecordsTableProps) => {
  const filteredRecordsData = records.map((record) => {
    const previewRecord = record.record.find((dataItem) => dataItem.name === preview);
    if (previewRecord) {
      return previewRecord.value;
    }
    return null;
  });

  const tableRows = filteredRecordsData.map((item) => (
    <ScrollableTable.TR key={Math.random()}>
      <ScrollableTable.TD>{item}</ScrollableTable.TD>
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
