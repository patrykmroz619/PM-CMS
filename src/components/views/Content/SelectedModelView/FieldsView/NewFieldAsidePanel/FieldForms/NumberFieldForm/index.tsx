import React from "react";

import { fieldForms as content } from "@content";
import FieldFormProvider from "../FieldFormProvider";
import { InputWithCheckbox, Input, Checkbox } from "@common";

const initialValues: NumberFieldFormData = {
  type: "number",
  name: "",
  integer: false,
  unique: false
};

const { numberField } = content;

const NumberFieldForm = () => (
  <FieldFormProvider
    initialValues={initialValues}
    render={(formik) => (
      <>
        <label htmlFor="name">{numberField.name.label}</label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={numberField.name.placeholder}
          onChange={formik.handleChange}
          value={formik.values.name}
          isTouched={formik.touched.name}
          error={formik.errors.name}
        />
        <InputWithCheckbox
          id="min"
          name="min"
          type="number"
          label={numberField.min.label}
          onChange={formik.handleChange}
          value={formik.values.min}
          isTouched={formik.touched.min}
          error={formik.errors.min}
          reset={() => formik.setFieldValue("min", undefined)}
        />
        <InputWithCheckbox
          id="max"
          name="max"
          type="number"
          label={numberField.max.label}
          onChange={formik.handleChange}
          value={formik.values.max}
          isTouched={formik.touched.max}
          error={formik.errors.max}
          reset={() => formik.setFieldValue("max", undefined)}
        />
        <Checkbox
          id="unique"
          name="unique"
          label={numberField.unique}
          onChange={formik.handleChange}
          checked={formik.values.unique}
        />
        <Checkbox
          id="integer"
          name="integer"
          label={numberField.integer}
          onChange={formik.handleChange}
          checked={formik.values.integer}
        />
      </>
    )}
  />
);

export default NumberFieldForm;
