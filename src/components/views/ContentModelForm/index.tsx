import React from "react";

import { addContentModel } from "@api/contentModels";
import { currentProjectActions } from "@actions";
import { slugify } from "@utils";
import { useFormik } from "formik";
import { setError } from "@validators";
import { validateApiEndpoint, validateProjectName } from "validators/projectDataValidators";
import { useSubmitAndDispatch } from "@hooks";
import ContentModelForm from "./Form";
import routes from "@routes";
import { Spinner } from "@common";
import { useSelector } from "react-redux";
import currentProjectSelectors from "store/selectors/currentProjectSelectors";
import { useHistory } from "react-router-dom";

type ErrorObject = Partial<NewContentModelData>;

const initialValues: NewContentModelData = {
  name: "",
  endpoint: ""
};

const ContentModelFormView = () => {
  const history = useHistory();

  const onSuccess = () => history.push(routes.content);

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    addContentModel,
    currentProjectActions.addContentModel,
    onSuccess
  );

  const currentProjectId = useSelector(currentProjectSelectors.id);

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
