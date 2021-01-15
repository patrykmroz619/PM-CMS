import React from "react";

import { fieldForms as content } from "@content";
import AddFormProvider from "../AddFormProvider";
import UpdateFormProvider from "../UpdateFormProvider";
import { Input } from "@common";

type BooleanFieldFormProps = {
  initialValues?: BooleanFieldFormData;
  update?: boolean;
  closePanel: () => void;
};

const defaultValues: BooleanFieldFormData = {
  type: "boolean",
  name: ""
};

const { booleanField } = content;

const BooleanFieldForm = ({ initialValues, update, closePanel }: BooleanFieldFormProps) => {
  const FormProvider = update ? UpdateFormProvider : AddFormProvider;

  return (
    <FormProvider
      initialValues={initialValues || defaultValues}
      closePanel={closePanel}
      render={(formik) => (
        <>
          <label htmlFor="name">{booleanField.name.label}</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={booleanField.name.placeholder}
            onChange={formik.handleChange}
            value={formik.values.name}
            isTouched={formik.touched.name}
            error={formik.errors.name}
          />
        </>
      )}
    />
  );
};

export default BooleanFieldForm;
