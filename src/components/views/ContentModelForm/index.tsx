import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { addContentModel } from "@api/contentModels";
import { currentProjectActions } from "@actions";
import routes from "@routes";
import { useNotification, useSubmitAndDispatch } from "@hooks";
import { setError, projectDataValidator } from "@validators";
import { currentProjectSelector } from "@selectors";
import { slugify } from "@utils";
import { newContentModelForm as content } from "@content";

import ContentModelForm from "./Form";
import { Spinner } from "@common";

type ErrorObject = Partial<NewContentModelData>;

const initialValues: NewContentModelData = {
  name: "",
  endpoint: ""
};

const { validateApiEndpoint, validateProjectName } = projectDataValidator;

const ContentModelFormView = () => {
  const history = useHistory();
  const { success } = useNotification();

  const onSuccess = () => {
    history.push(routes.content);
    success(content.successNotification);
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    addContentModel,
    currentProjectActions.addContentModel,
    onSuccess
  );

  const currentProjectId = useSelector(currentProjectSelector.id);

  const formik = useFormik({
    initialValues,
    onSubmit(values) {
      if (!values.endpoint) {
        values.endpoint = slugify(values.name);
      }

      handleSubmit(values, currentProjectId);
    },
    validate(formValues) {
      const errors: ErrorObject = {};

      setError(errors, "name", validateProjectName(formValues.name));
      if (formValues.endpoint) {
        setError(errors, "endpoint", validateApiEndpoint(formValues.endpoint));
      } else {
        setError(errors, "endpoint", validateApiEndpoint(slugify(formValues.name)));
      }

      return errors;
    }
  });

  if (pending) return <Spinner />;

  return <ContentModelForm formik={formik} error={error} />;
};

export default ContentModelFormView;
