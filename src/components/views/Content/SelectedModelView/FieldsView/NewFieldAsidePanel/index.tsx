import React, { useCallback, useState } from "react";

import { contentModelsPage as content } from "@content";

import FieldTypesList from "../FieldTypesList";
import TextFieldForm from "../FieldForms/TextFieldForm";
import NumberFieldForm from "../FieldForms/NumberFieldForm";
import BooleanFieldForm from "../FieldForms/BooleanFieldForm";
import DateFieldForm from "../FieldForms/DateFieldForm";
// import MediaFieldForm from "./FieldForms/MediaFieldForm";
import ColorFieldForm from "../FieldForms/ColorFieldForm";

import { AsidePanel } from "@common";
import * as S from "./styled";

type NewFieldFormProps = {
  isVisible: boolean;
  closePanel: () => void;
};

const NewFieldAsidePanel = ({ isVisible, closePanel }: NewFieldFormProps) => {
  const [selectedFieldType, setSelectedFieldType] = useState<FieldType | null>(null);

  const selectFieldType = useCallback((fieldType: FieldType) => {
    setSelectedFieldType(fieldType);
  }, []);

  const FieldForm = (() => {
    switch (selectedFieldType) {
      case "text":
        return <TextFieldForm closePanel={closePanel} />;
      case "number":
        return <NumberFieldForm closePanel={closePanel} />;
      case "boolean":
        return <BooleanFieldForm closePanel={closePanel} />;
      case "date":
        return <DateFieldForm closePanel={closePanel} />;
      // case "media":
      //   return <MediaFieldForm closePanel={closePanel} />;
      case "color":
        return <ColorFieldForm closePanel={closePanel} />;
      case null:
        return null;
    }
  })();

  return (
    <AsidePanel visible={isVisible} close={closePanel}>
      <S.ListLabel>{content.newFieldPanel.label}</S.ListLabel>
      <FieldTypesList selectFieldType={selectFieldType} selectedFieldType={selectedFieldType} />
      {FieldForm}
      <S.CancelButton onClick={closePanel} secondary>
        {content.newFieldPanel.cancel}
      </S.CancelButton>
    </AsidePanel>
  );
};

export default NewFieldAsidePanel;
