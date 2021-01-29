import React from "react";

import * as S from "./styled";

type RecordDataListItemProps = {
  recordItem: RecordItem | null;
  fieldName: string;
  fieldType: FieldType;
};

const RecordDataListItem = ({ fieldName, recordItem, fieldType }: RecordDataListItemProps) => {
  const fieldValue = (() => {
    if (recordItem) {
      switch (fieldType) {
        case "text":
        case "number":
        case "date":
        case "boolean":
          return <S.TextValue>{String(recordItem.value)}</S.TextValue>;
        case "color":
          return <S.ColorValue value={String(recordItem.value)} />;
      }
    }
  })();

  return (
    <S.ItemWrapper>
      <S.FieldName>{fieldName}</S.FieldName>
      <S.Separator />
      {fieldValue}
    </S.ItemWrapper>
  );
};

export default RecordDataListItem;
