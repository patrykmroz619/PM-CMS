import React from "react";

import FieldFormProvider from "../FieldFormProvider";
import { InputWithCheckbox, Input, Checkbox } from "@common";

const initialValues: TextFieldFormData = {
  type: "text",
  name: "",
  multiline: false,
  unique: false
};

const TextFieldForm = () => {
  return (
    <FieldFormProvider
      initialValues={initialValues}
      render={(formik) => (
        <>
          <label htmlFor="name">Field name</label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            isTouched={formik.touched.name}
            error={formik.errors.name}
          />
          <InputWithCheckbox
            id="minLength"
            name="minLength"
            type="number"
            label="Min. length"
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
            label="Max. length"
            onChange={formik.handleChange}
            value={formik.values.maxLength}
            isTouched={formik.touched.maxLength}
            error={formik.errors.maxLength}
            reset={() => formik.setFieldValue("maxLength", undefined)}
          />
          <Checkbox
            id="unique"
            name="unique"
            label="Unique value"
            onChange={formik.handleChange}
            checked={formik.values.unique}
          />
          <Checkbox
            id="multiline"
            name="multiline"
            label="Multi-line text"
            onChange={formik.handleChange}
            checked={formik.values.multiline}
          />
        </>
      )}
    />
  );
};

export default TextFieldForm;
