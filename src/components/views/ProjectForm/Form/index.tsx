import React, { ChangeEvent, useState } from "react";

import { FormikProps } from "formik";

import { newProjectForm as content } from "@content";
import { slugify } from "@utils";
import { Input } from "@common";
import * as S from "./styled";

const { heading, nameInput, endpointInput, submit } = content;

type ProjectFormProps = {
  formik: FormikProps<NewProjectFormData>;
  error: string;
};

const ProjectForm = ({ formik, error }: ProjectFormProps) => {
  const [isEndpointDefault, setIsEnpointDefault] = useState(true);

  const handleEndpointInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isEndpointDefault) {
      setIsEnpointDefault(false);
    }

    formik.handleChange(e);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Heading>{heading}</S.Heading>
        {error && <S.Error>{error}</S.Error>}
        <label htmlFor="name">{nameInput.label}</label>
        <Input
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder={nameInput.placeholder}
          isTouched={formik.touched.name}
          error={formik.errors.name}
        />
        <label htmlFor="endpoint">{endpointInput.label}</label>
        <Input
          id="endpoint"
          name="endpoint"
          onChange={handleEndpointInputChange}
          value={isEndpointDefault ? slugify(formik.values.name) : formik.values.endpoint}
          placeholder={endpointInput.placeholder}
          isTouched={formik.touched.endpoint}
          error={formik.errors.endpoint}
        />
        <S.SubmitButton type="submit">{submit}</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default ProjectForm;
