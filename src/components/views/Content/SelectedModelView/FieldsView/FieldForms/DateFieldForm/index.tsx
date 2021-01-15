import React from "react";

import { fieldForms as content } from "@content";
import AddFormProvider from "../AddFormProvider";
import UpdateFormProvider from "../UpdateFormProvider";
import { Input } from "@common";

type DateFieldFormProps = {
  initialValues?: DateFieldFormData;
  update?: boolean;
  closePanel: () => void;
};

const defaultValues: DateFieldFormData = {
  type: "date",
  name: ""
};

const { dateField } = content;

const DateFieldForm = ({ initialValues, update, closePanel }: DateFieldFormProps) => {
  const FormProvider = update ? UpdateFormProvider : AddFormProvider;

  return (
    <FormProvider
      initialValues={initialValues || defaultValues}
      closePanel={closePanel}
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
};

export default DateFieldForm;
