import React from "react";

import { fieldForms as content } from "@content";
import FieldFormProvider from "../FieldFormProvider";
import { Input } from "@common";

const initialValues: BooleanFieldFormData = {
  type: "boolean",
  name: ""
};

const { booleanField } = content;

const BooleanFieldForm = () => (
  <FieldFormProvider
    initialValues={initialValues}
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

export default BooleanFieldForm;
