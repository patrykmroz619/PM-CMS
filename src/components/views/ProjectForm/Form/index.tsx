import React from "react";
import { FormikProps } from "formik";

import { newProjectForm as content } from "@content";

import { Input } from "@common";
import * as S from "./styled";

const { heading, nameInput, submit } = content;

type ProjectFormProps = {
  formik: FormikProps<NewProjectFormData>;
  error: string | null;
};

const ProjectForm = ({ formik, error }: ProjectFormProps) => (
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
      <S.SubmitButton type="submit">{submit}</S.SubmitButton>
    </S.Form>
  </S.Wrapper>
);

export default ProjectForm;
