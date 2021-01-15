import React from "react";

import CogIcon from "@assets/cog.svg";
import * as S from "./styled";

type FieldProps = {
  field: ContentField;
  numeral: number;
  handleClick: () => void;
};

const Field = ({ field, numeral, handleClick }: FieldProps) => {
  return (
    <S.Field>
      <S.Numeral>{numeral}</S.Numeral>
      <S.Type>{field.type}</S.Type>
      <S.Name>{field.name}</S.Name>
      <CogIcon onClick={handleClick} />
    </S.Field>
  );
};

export default Field;
