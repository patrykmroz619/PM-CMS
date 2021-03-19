import React from "react";
import { useHistory } from "react-router-dom";

import { ScrollableTable } from "@common";
import RecordsTableRow from "./RecordsTableRow";
import * as S from "./styled";

type RecordsTableProps = {
  records: RecordObject[];
  preview: string;
  searchValue: string;
};

const getRecordsWithPreview = (records: RecordObject[], preview: string) => {
  return records.map((record) => {
    const previewRecord = record.data.find((dataItem) => dataItem.name === preview);

    return { ...record, preview: previewRecord?.value || null };
  });
};

const checkFilterValue = (value1: string, value2: string) =>
  value1.toLowerCase().includes(value2.toLowerCase());

const RecordsTable = ({ records, preview, searchValue }: RecordsTableProps) => {
  const history = useHistory();

  const handleRecordClick = (recordId: string) => history.push(`/panel/records/${recordId}`);

  const recordsWithPreview = getRecordsWithPreview(records, preview);

  const filteredRecords = searchValue
    ? recordsWithPreview.filter((record) => checkFilterValue(String(record.preview), searchValue))
    : recordsWithPreview;

  const tableRows = filteredRecords.map((record) => (
    <RecordsTableRow key={record.id} record={record} handleRecordClick={handleRecordClick} />
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

export default React.memo(RecordsTable);
