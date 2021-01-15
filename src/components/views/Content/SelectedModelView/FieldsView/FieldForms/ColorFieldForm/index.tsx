import React from "react";

import { fieldForms as content } from "@content";
import AddFormProvider from "../AddFormProvider";
import UpdateFormProvider from "../UpdateFormProvider";
import { Input } from "@common";

type ColorFieldFormProps = {
  initialValues?: ColorFieldFormData;
  update?: boolean;
  closePanel: () => void;
};

const defaultValues: ColorFieldFormData = {
  type: "color",
  name: ""
};

const { colorField } = content;

const ColorFieldForm = ({ initialValues, update, closePanel }: ColorFieldFormProps) => {
  const FormProvider = update ? UpdateFormProvider : AddFormProvider;

  return (
    <FormProvider
      initialValues={initialValues || defaultValues}
      closePanel={closePanel}
      render={(formik) => (
        <>
          <label htmlFor="name">{colorField.name.label}</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={colorField.name.placeholder}
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

export default ColorFieldForm;
