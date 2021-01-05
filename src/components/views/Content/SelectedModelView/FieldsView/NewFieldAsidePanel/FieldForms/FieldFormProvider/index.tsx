import React from "react";
import { FormikProps, useFormik } from "formik";

import { useSubmitAndDispatchWithRedirect } from "@hooks";
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
};

const FieldFormProvider = <T extends ContentFieldFormData>({
  initialValues,
  render
}: FieldFormProviderProps<T>) => {
  const [loading, error, handleSubmit] = useSubmitAndDispatchWithRedirect(
    addFieldApiCall,
    currentProjectActions.addField,
    null
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

  const submitMiddleware = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  if (loading) return <Spinner />;

  return (
    <S.Form onSubmit={submitMiddleware}>
      {error && <S.Error>{error}</S.Error>}
      {render(formik)}
      <Button type="submit">{content.fieldPanel.submit}</Button>
    </S.Form>
  );
};

export default FieldFormProvider;
