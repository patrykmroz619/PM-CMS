import React from "react";
import { useFormik } from "formik";

import { slugify } from "@utils";
import { setError, projectDataValidator } from "@validators";

import ProjectForm from "./Form";
import useHandleSubmit from "./usehandleSubmit";
import { Spinner } from "@common";

type ErrorObject = Partial<NewProjectFormData>;

const initialValues: NewProjectFormData = {
  name: "",
  endpoint: ""
};

const { validateProjectName, validateApiEndpoint } = projectDataValidator;

const ProjectFormView = () => {
  const [pending, error, handleSubmit] = useHandleSubmit();

  const formik = useFormik({
    initialValues,
    onSubmit(formValues) {
      if (!formValues.endpoint) {
        formValues.endpoint = slugify(formValues.name);
      }

      handleSubmit(formValues);
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

  return pending ? <Spinner /> : <ProjectForm formik={formik} error={error} />;
};

export default ProjectFormView;
