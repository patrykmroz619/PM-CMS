import React from "react";

import { newProjectForm as content } from "@content";

import * as S from "./styled";

const { heading, nameInput, endpointInput, submit } = content;

const NewProjectFormView = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Heading>{heading}</S.Heading>
        <label>{nameInput.label}</label>
        <input placeholder={nameInput.placeholder} />
        <label>{endpointInput.label}</label>
        <input placeholder={endpointInput.placeholder} />
        <S.SubmitButton type="submit">{submit}</S.SubmitButton>
      </S.Form>
    </S.Wrapper>
  );
};

export default NewProjectFormView;
