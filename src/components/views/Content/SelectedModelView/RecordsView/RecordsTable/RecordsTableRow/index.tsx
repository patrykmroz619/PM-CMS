import React from "react";

import { ScrollableTable } from "@common";
import { convertToDate } from "@utils";

type RecordTableRowProps = {
  handleRecordClick: (recordId: string) => void;

  record: RecordObject & { preview: string | number | boolean | null };
};

const RecordTableRow = ({ record, handleRecordClick }: RecordTableRowProps) => (
  <ScrollableTable.TR key={record.id} onClick={() => handleRecordClick(record.id)}>
    <ScrollableTable.TD>{String(record.preview)}</ScrollableTable.TD>
    <ScrollableTable.TD>{convertToDate(record.createdAt)}</ScrollableTable.TD>
  </ScrollableTable.TR>
);

export default RecordTableRow;
