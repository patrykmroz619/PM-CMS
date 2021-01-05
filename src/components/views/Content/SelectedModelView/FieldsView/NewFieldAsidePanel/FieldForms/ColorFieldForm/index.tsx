import React from "react";

import { fieldForms as content } from "@content";
import FieldFormProvider from "../FieldFormProvider";
import { Input } from "@common";

const initialValues: ColorFieldFormData = {
  type: "color",
  name: ""
};

const { colorField } = content;

const ColorFieldForm = () => (
  <FieldFormProvider
    initialValues={initialValues}
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

export default ColorFieldForm;
