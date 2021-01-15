import React, { useEffect } from "react";
import { FormikProps, useFormik } from "formik";

import { useSubmitAndDispatch } from "@hooks";
import { addField as addFieldApiCall } from "@api/fields";
import { currentProjectActions } from "@actions";
import { contentModelsPage as content } from "@content";
import { validateField } from "@validators";

import { Button, Spinner } from "@common";
import * as S from "./styled";
import { useSelector } from "react-redux";
import currentProjectSelectors from "store/selectors/currentProjectSelectors";

type FieldFormProviderProps<T> = {
  initialValues: T;
  render: (formik: FormikProps<T>) => React.ReactChild;
  closePanel: () => void;
};

const AddFormProvider = <T extends ContentFieldFormData>({
  initialValues,
  render,
  closePanel
}: FieldFormProviderProps<T>) => {
  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    addFieldApiCall,
    currentProjectActions.addField,
    closePanel
  );

  const selectedModelId = useSelector(currentProjectSelectors.selectedModelId);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit(values) {
      if (selectedModelId) {
        handleSubmit(values, selectedModelId);
      }
    },
    validate(values) {
      return validateField(values);
    }
  });

  useEffect(() => {
    if (JSON.stringify(formik.values) != JSON.stringify(initialValues)) {
      formik.setValues(initialValues);
    }
  }, [initialValues]);

  const submitMiddleware = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  if (pending) return <Spinner />;

  return (
    <S.Form onSubmit={submitMiddleware}>
      {error && <S.Error>{error}</S.Error>}
      {render(formik)}
      <Button type="submit">{content.newFieldPanel.submit}</Button>
    </S.Form>
  );
};

export default AddFormProvider;
