import React, { useCallback, useState } from "react";

import { contentModelsPage as content } from "@content";

import FieldTypesList from "./FieldTypesList";
import TextFieldForm from "./FieldForms/TextFieldForm";
import NumberFieldForm from "./FieldForms/NumberFieldForm";
import BooleanFieldForm from "./FieldForms/BooleanFieldForm";
import DateFieldForm from "./FieldForms/DateFieldForm";
import MediaFieldForm from "./FieldForms/MediaFieldForm";
import ColorFieldForm from "./FieldForms/ColorFieldForm";

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
        return <NumberFieldForm />;
      case "boolean":
        return <BooleanFieldForm />;
      case "date":
        return <DateFieldForm />;
      case "media":
        return <MediaFieldForm />;
      case "color":
        return <ColorFieldForm />;
    }
  })();

  return (
    <>
      {isVisible && <S.BlurBackground onClick={closePanel} />}
      <S.FormWrapper isVisible={isVisible}>
        <h5>{content.fieldPanel.fieldChoose}</h5>
        <FieldTypesList selectFieldType={selectFieldType} selectedFieldType={selectedFieldType} />
        {FieldForm}
        <S.CancelButton onClick={closePanel} secondary>
          {content.fieldPanel.cancel}
        </S.CancelButton>
      </S.FormWrapper>
    </>
  );
};

export default NewFieldAsidePanel;
