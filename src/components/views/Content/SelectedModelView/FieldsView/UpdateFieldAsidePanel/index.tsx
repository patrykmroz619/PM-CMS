import React from "react";

import { contentModelsPage as content } from "@content";

import FieldTypesList from "../FieldTypesList";
import TextFieldForm from "../FieldForms/TextFieldForm";
import NumberFieldForm from "../FieldForms/NumberFieldForm";
import BooleanFieldForm from "../FieldForms/BooleanFieldForm";
import DateFieldForm from "../FieldForms/DateFieldForm";
// import MediaFieldForm from "./FieldForms/MediaFieldForm";
import ColorFieldForm from "../FieldForms/ColorFieldForm";

import * as S from "./styled";
import AsidePanel from "../../AsidePanel";
import useDeleteFieldHandler from "./useDeleteFieldHandler";
import { Spinner } from "@common";

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
      // case "media":
      //   return <MediaFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case "color":
        return <ColorFieldForm update initialValues={selectedField} closePanel={closePanel} />;
      case null:
        return null;
    }
  })();

  const onDeleteSuccess = () => {
    closePanel();
  };

  const [pending, handleDeleteField] = useDeleteFieldHandler(onDeleteSuccess);

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
          <S.DeleteButton onClick={handleDeleteFieldClick}>
            {content.updateFieldPanel.delete}
          </S.DeleteButton>
          <S.CancelButton onClick={closePanel} secondary>
            {content.updateFieldPanel.cancel}
          </S.CancelButton>
        </>
      )}
    </AsidePanel>
  );
};

export default UpdateFieldAsidePanel;
