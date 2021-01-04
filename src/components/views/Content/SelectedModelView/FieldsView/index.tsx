import React, { useState } from "react";

import LackOfFieldMessage from "../LackOfFieldsMessage";
import NewFieldAsidePanel from "./NewFieldAsidePanel";

type FieldsViewProps = {
  model: ContentModel;
};

const FieldsView = ({ model }: FieldsViewProps) => {
  const [isNewFieldPanelVisible, setNewFieldPanelVisibility] = useState(false);

  const openNewFieldPanel = () => setNewFieldPanelVisibility(true);

  const closeNewFieldPanel = () => setNewFieldPanelVisibility(false);

  const isLackOfFields = model.fields.length === 0;

  return (
    <section>
      {isLackOfFields ? (
        <LackOfFieldMessage openNewFieldPanel={openNewFieldPanel} />
      ) : (
        <h4>Fields</h4>
      )}
      <NewFieldAsidePanel isVisible={isNewFieldPanelVisible} closePanel={closeNewFieldPanel} />
    </section>
  );
};

export default FieldsView;
