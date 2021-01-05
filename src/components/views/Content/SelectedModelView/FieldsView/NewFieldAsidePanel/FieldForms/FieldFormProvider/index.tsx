import React from "react";
import { FormikProps, useFormik } from "formik";

import { contentModelsPage as content } from "@content";
import { validateField } from "@validators";

import { Button } from "@common";
import * as S from "./styled";

type FieldFormProviderProps<T> = {
  initialValues: T;
  render: (formik: FormikProps<T>) => React.ReactChild;
};

const FieldFormProvider = <T extends ContentFieldFormData>({
  initialValues,
  render
}: FieldFormProviderProps<T>) => {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit(values) {
      console.log(values);
    },
    validate(values) {
      return validateField(values);
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      {render(formik)}
      <Button type="submit">{content.fieldPanel.submit}</Button>
    </S.Form>
  );
};

export default FieldFormProvider;
