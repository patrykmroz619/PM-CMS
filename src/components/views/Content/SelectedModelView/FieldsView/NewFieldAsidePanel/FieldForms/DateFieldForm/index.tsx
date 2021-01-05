import React from "react";

import { fieldForms as content } from "@content";
import FieldFormProvider from "../FieldFormProvider";
import { Input } from "@common";

const initialValues: DateFieldFormData = {
  type: "date",
  name: ""
};

const { dateField } = content;

const DateFieldForm = () => (
  <FieldFormProvider
    initialValues={initialValues}
    render={(formik) => (
      <>
        <label htmlFor="name">{dateField.name.label}</label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder={dateField.name.placeholder}
          onChange={formik.handleChange}
          value={formik.values.name}
          isTouched={formik.touched.name}
          error={formik.errors.name}
        />
      </>
    )}
  />
);

export default DateFieldForm;
