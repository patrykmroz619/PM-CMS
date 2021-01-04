import React, { useCallback, useState } from "react";
import TextFieldForm from "./FieldForms/TextFieldForm";
import FieldTypesList from "./FieldTypesList";

import * as S from "./styled";

type NewFieldFormProps = {
  isVisible: boolean;
  closePanel: () => void;
};

const NewFieldAsidePanel = ({ isVisible, closePanel }: NewFieldFormProps) => {
  const [selectedFieldType, setSelectedFieldType] = useState<FieldType>("text");

  const selectFieldType = useCallback((fieldType: FieldType) => {
    setSelectedFieldType(fieldType);
  }, []);

  const FieldForm = (() => {
    switch (selectedFieldType) {
      case "text":
        return <TextFieldForm />;
      case "number":
        return <p>number</p>;
      case "boolean":
        return <p>boolean</p>;
      case "date":
        return <p>date</p>;
      case "media":
        return <p>media</p>;
      case "color":
        return <p>color</p>;
    }
  })();

  return (
    <>
      {isVisible && <S.BlurBackground onClick={closePanel} />}
      <S.FormWrapper isVisible={isVisible}>
        <h5>Choose a field type</h5>
        <FieldTypesList selectFieldType={selectFieldType} selectedFieldType={selectedFieldType} />
        {FieldForm}
      </S.FormWrapper>
    </>
  );
};

export default NewFieldAsidePanel;
