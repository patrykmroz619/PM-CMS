import React from "react";

import * as S from "./styled";

type FieldTypesListItemProps = {
  type: FieldType;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  selectFieldType: (fieldType: FieldType) => void;
  selectedType: FieldType;
};

const FieldTypesListItem = ({
  type,
  icon: Icon,
  selectFieldType,
  selectedType
}: FieldTypesListItemProps) => {
  const handleClick = () => selectFieldType(type);

  return (
    <S.ListItem onClick={handleClick} isSelected={type === selectedType}>
      <Icon />
      <S.Type>{type}</S.Type>
    </S.ListItem>
  );
};

export default FieldTypesListItem;
