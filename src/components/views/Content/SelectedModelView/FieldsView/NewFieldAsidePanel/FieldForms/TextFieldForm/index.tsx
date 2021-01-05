import React from "react";

import { fieldForms as content } from "@content";
import FieldFormProvider from "../FieldFormProvider";
import { InputWithCheckbox, Input, Checkbox } from "@common";

const initialValues: TextFieldFormData = {
  type: "text",
  name: "",
  multiline: false,
  unique: false
};

const { textField } = content;

const TextFieldForm = () => {
  return (
    <FieldFormProvider
      initialValues={initialValues}
      render={(formik) => (
        <>
          <label htmlFor="name">{textField.name.label}</label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={textField.name.placeholder}
            onChange={formik.handleChange}
            value={formik.values.name}
            isTouched={formik.touched.name}
            error={formik.errors.name}
          />
          <InputWithCheckbox
            id="minLength"
            name="minLength"
            type="number"
            label={textField.min.label}
            placeholder={textField.min.placeholder}
            onChange={formik.handleChange}
            value={formik.values.minLength}
            isTouched={formik.touched.minLength}
            error={formik.errors.minLength}
            reset={() => formik.setFieldValue("minLength", undefined)}
          />
          <InputWithCheckbox
            id="maxLength"
            name="maxLength"
            type="number"
            label={textField.max.label}
            placeholder={textField.max.placeholder}
            onChange={formik.handleChange}
            value={formik.values.maxLength}
            isTouched={formik.touched.maxLength}
            error={formik.errors.maxLength}
            reset={() => formik.setFieldValue("maxLength", undefined)}
          />
          <Checkbox
            id="unique"
            name="unique"
            label={textField.unique}
            onChange={formik.handleChange}
            checked={formik.values.unique}
          />
          <Checkbox
            id="multiline"
            name="multiline"
            label={textField.multiline}
            onChange={formik.handleChange}
            checked={formik.values.multiline}
          />
        </>
      )}
    />
  );
};

export default TextFieldForm;
