import routes from "@routes";
import React from "react";
import { Redirect } from "react-router-dom";

type RecordsViewProps = {
  model: ContentModel;
};

const RecordsView = ({ model }: RecordsViewProps) => {
  if (model.fields.length === 0) {
    return <Redirect to={routes.modelFields} />;
  }

  return (
    <div>
      <h4>records</h4>
    </div>
  );
};

export default RecordsView;
