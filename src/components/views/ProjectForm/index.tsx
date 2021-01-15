import React from "react";
import { useFormik } from "formik";

import { addProject } from "@api/projects";
import { projectsActions } from "@actions";
import { useSubmitAndDispatch } from "@hooks";
import { setError, projectDataValidator } from "@validators";
import routes from "@routes";

import ProjectForm from "./Form";
import { Spinner } from "@common";
import { useHistory } from "react-router-dom";

type ErrorObject = Partial<NewProjectFormData>;

const initialValues: NewProjectFormData = {
  name: ""
};

const { validateProjectName } = projectDataValidator;

const ProjectFormView = () => {
  const history = useHistory();

  const onSuccess = () => {
    history.push(routes.projects);
  };

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    addProject,
    projectsActions.add,
    onSuccess
  );

  const formik = useFormik({
    initialValues,
    onSubmit(formValues) {
      handleSubmit(formValues);
    },
    validate(formValues) {
      const errors: ErrorObject = {};

      setError(errors, "name", validateProjectName(formValues.name));

      return errors;
    }
  });

  return pending ? <Spinner /> : <ProjectForm formik={formik} error={error} />;
};

export default ProjectFormView;
