import React from "react";
import Field from "./Field";

import * as S from "./styled";

type FieldsListProps = {
  modelId: string;
  fields: ContentField[];
  openFieldPanel: (fieldId: string) => void;
};

const FieldsList = ({ fields, openFieldPanel }: FieldsListProps) => {
  return (
    <S.FieldList>
      {fields.map((field, index) => (
        <Field
          key={field.id}
          field={field}
          numeral={index + 1}
          handleClick={() => openFieldPanel(field.id)}
        />
      ))}
    </S.FieldList>
  );
};

export default FieldsList;
