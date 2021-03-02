import React, { useEffect } from "react";
import { FormikProps, useFormik } from "formik";

import { useNotification, useSubmitAndDispatch } from "@hooks";
import { updateField as updateFieldApiCall } from "@api/fields";
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

const FieldFormProvider = <T extends ContentFieldFormData>({
  initialValues,
  render,
  closePanel
}: FieldFormProviderProps<T>) => {
  const { success } = useNotification();

  const onSuccess = () => {
    closePanel();
    success(content.updateFieldPanel.successUpdateNotification);
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    updateFieldApiCall,
    currentProjectActions.updateField,
    onSuccess
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

  const submitUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  if (pending) return <Spinner />;

  return (
    <S.Form onSubmit={submitUpdate}>
      {error && <S.Error>{error}</S.Error>}
      {render(formik)}
      <Button type="submit">{content.updateFieldPanel.submit}</Button>
    </S.Form>
  );
};

export default FieldFormProvider;
