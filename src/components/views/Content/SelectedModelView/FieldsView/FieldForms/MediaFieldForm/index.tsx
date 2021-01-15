import React from "react";

import AddFormProvider from "../AddFormProvider";
import UpdateFormProvider from "../UpdateFormProvider";

type NumberFieldFormProps = {
  update?: boolean;
  closePanel: () => void;
};

const initialValues: BooleanFieldFormData = {
  type: "boolean",
  name: ""
};

const MediaFieldForm = ({ update, closePanel }: NumberFieldFormProps) => {
  const FormProvider = update ? UpdateFormProvider : AddFormProvider;

  return (
    <FormProvider
      initialValues={initialValues}
      closePanel={closePanel}
      render={() => (
        <>
          <p>media form</p>
        </>
      )}
    />
  );
};

export default MediaFieldForm;
