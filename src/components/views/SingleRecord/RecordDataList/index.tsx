import styled from "@myStyled";
import React from "react";
import RecordDataListItem from "./RecordDataListItem";

type RecordDataListProps = {
  record: RecordObject;
  fields: ContentField[];
};

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const getCorrespondingRecordItem = (fieldName: string, recordItems: RecordItem[]) =>
  recordItems.find((item) => item.name === fieldName) || null;

const RecordDataList = ({ record, fields }: RecordDataListProps) => {
  return (
    <Ul>
      {fields.map((field) => (
        <RecordDataListItem
          key={field.id}
          fieldName={field.name}
          fieldType={field.type}
          recordItem={getCorrespondingRecordItem(field.name, record.data)}
        />
      ))}
    </Ul>
  );
};

export default RecordDataList;
