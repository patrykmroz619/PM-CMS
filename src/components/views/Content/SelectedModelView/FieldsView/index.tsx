import React from "react";
import LackOfFieldMessage from "../LackOfFieldsMessage";

type FieldsViewProps = {
  model: ContentModel;
};

const FieldsView = ({ model }: FieldsViewProps) => {
  if (model.fields.length === 0) {
    return <LackOfFieldMessage />;
  }

  console.log(model.fields);

  return (
    <div>
      <h4>Fields</h4>
    </div>
  );
};

export default FieldsView;
