import React from "react";

import FieldTypesListItem from "./FieldType";
import TextIcon from "@assets/text.svg";
import NumbersIcon from "@assets/numbers.svg";
import BooleanIcon from "@assets/boolean.svg";
import DateIcon from "@assets/date.svg";
import MediaIcon from "@assets/media-field.svg";
import ColorIcon from "@assets/color.svg";
import * as S from "./styled";

type FieldTypesListProps = {
  selectFieldType?: (fieldType: FieldType) => void;
  selectedFieldType: FieldType | null;
};

const FieldTypesList = ({ selectedFieldType, selectFieldType }: FieldTypesListProps) => {
  return (
    <S.List>
      <FieldTypesListItem
        type="text"
        icon={TextIcon}
        selectFieldType={selectFieldType}
        selectedType={selectedFieldType}
      />
      <FieldTypesListItem
        type="number"
        icon={NumbersIcon}
        selectFieldType={selectFieldType}
        selectedType={selectedFieldType}
      />
      <FieldTypesListItem
        type="boolean"
        icon={BooleanIcon}
        selectFieldType={selectFieldType}
        selectedType={selectedFieldType}
      />
      <FieldTypesListItem
        type="date"
        icon={DateIcon}
        selectFieldType={selectFieldType}
        selectedType={selectedFieldType}
      />
      <FieldTypesListItem
        type="media"
        icon={MediaIcon}
        selectFieldType={selectFieldType}
        selectedType={selectedFieldType}
      />
      <FieldTypesListItem
        type="color"
        icon={ColorIcon}
        selectFieldType={selectFieldType}
        selectedType={selectedFieldType}
      />
    </S.List>
  );
};

export default FieldTypesList;
