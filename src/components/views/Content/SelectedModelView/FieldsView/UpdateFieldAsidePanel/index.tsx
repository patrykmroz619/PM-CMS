import React from "react";

import { contentModelsPage as content } from "@content";
import useDeleteFieldHandler from "./useDeleteFieldHandler";

import FieldTypesList from "../FieldTypesList";
import TextFieldForm from "../FieldForms/TextFieldForm";
import NumberFieldForm from "../FieldForms/NumberFieldForm";
import BooleanFieldForm from "../FieldForms/BooleanFieldForm";
import DateFieldForm from "../FieldForms/DateFieldForm";
import ColorFieldForm from "../FieldForms/ColorFieldForm";

import { Spinner, AsidePanel } from "@common";
import * as S from "./styled";

type NewFieldFormProps = {
  isVisible: boolean;
  closePanel: () => void;
  selectedField?: ContentField;
};

const UpdateFieldAsidePanel = ({ isVisible, closePanel, selectedField }: NewFieldFormProps) => {
  const FieldForm = (() => {
    switch (selectedField?.type) {
      case "text":
        return <TextFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case "number":
        return <NumberFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case "boolean":
        return <BooleanFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case "date":
        return <DateFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case "color":
        return <ColorFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case null:
        return null;
    }
  })();

  const [pending, handleDeleteField] = useDeleteFieldHandler(closePanel);

  const handleDeleteFieldClick = () => {
    if (selectedField) {
      handleDeleteField(selectedField.id);
    }
  };

  if (!selectedField) return null;

  return (
    <AsidePanel visible={isVisible} close={closePanel}>
      {pending || (
        <>
          <S.ListLabel>{content.updateFieldPanel.label}</S.ListLabel>
          <FieldTypesList selectedFieldType={selectedField.type} />
          {pending ? <Spinner /> : FieldForm}
          <S.Button danger onClick={handleDeleteFieldClick}>
            {content.updateFieldPanel.delete}
          </S.Button>
          <S.Button onClick={closePanel} secondary>
            {content.updateFieldPanel.cancel}
          </S.Button>
        </>
      )}
    </AsidePanel>
  );
};

export default UpdateFieldAsidePanel;
