import React from "react";

import FieldFormProvider from "../FieldFormProvider";

const initialValues: BooleanFieldFormData = {
  type: "boolean",
  name: ""
};

const MediaFieldForm = () => (
  <FieldFormProvider
    initialValues={initialValues}
    render={() => (
      <>
        <p>media form</p>
      </>
    )}
  />
);

export default MediaFieldForm;
