import React, { useState } from "react";

import { contentModelsPage as content } from "@content";

import LackOfFieldMessage from "./LackOfFieldsMessage";
import FieldsList from "./FieldsList";
import NewFieldAsidePanel from "./NewFieldAsidePanel";
import * as S from "./styled";
import UpdateFieldAsidePanel from "./UpdateFieldAsidePanel";

type FieldsViewProps = {
  model: ContentModel;
};

const FieldsView = ({ model }: FieldsViewProps) => {
  const [isNewFieldPanelVisible, setNewFieldPanelVisibility] = useState(false);
  const [isUpdateFieldPanelVisible, setUpdateFieldPanelVisibility] = useState(false);
  const [selectedField, setSelectedFied] = useState<ContentField | undefined>(undefined);

  const openNewFieldPanel = () => {
    setNewFieldPanelVisibility(true);
  };

  const closeNewFieldPanel = () => {
    setNewFieldPanelVisibility(false);
  };

  const openUpdateFieldPanel = (fieldId: string) => {
    const selectedField = model.fields.find((field) => field.id === fieldId);
    setSelectedFied(selectedField);
    setUpdateFieldPanelVisibility(true);
  };

  const closeUpdateFieldPanel = () => {
    setUpdateFieldPanelVisibility(false);
  };

  const isLackOfFields = model.fields.length === 0;

  return (
    <section>
      {isLackOfFields ? (
        <LackOfFieldMessage />
      ) : (
        <FieldsList
          modelId={model.id}
          fields={model.fields}
          openFieldPanel={openUpdateFieldPanel}
        />
      )}
      <S.AddFieldBtn onClick={openNewFieldPanel}>{content.addFieldButton}</S.AddFieldBtn>
      <NewFieldAsidePanel isVisible={isNewFieldPanelVisible} closePanel={closeNewFieldPanel} />
      <UpdateFieldAsidePanel
        isVisible={isUpdateFieldPanelVisible}
        closePanel={closeUpdateFieldPanel}
        selectedField={selectedField}
      />
    </section>
  );
};

export default FieldsView;
