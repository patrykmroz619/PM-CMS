import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useSubmitAndDispatch } from "@hooks";
import { currentProjectSelector } from "@selectors";
import { settingsPage as content } from "@content";

import * as S from "./styled";
import { updateProject } from "@api/projects";
import { currentProjectActions } from "@actions";
import { Spinner } from "@common";

const NameInput = () => {
  const [isInputDisabled, setInputDisabled] = useState(true);
  const currentProjectName = useSelector(currentProjectSelector.name);
  const currentProjectId = useSelector(currentProjectSelector.id);
  const [nameInputValue, setNameInputValue] = useState(currentProjectName);

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    updateProject,
    currentProjectActions.updateData
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isInputDisabled) {
      setInputDisabled(false);
    } else {
      handleSubmit({ name: nameInputValue }, currentProjectId);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(e.target.value);
  };
  return (
    <S.Form pending={pending}>
      <S.Input
        isTouched
        error={error}
        onChange={handleInputChange}
        value={nameInputValue}
        disabled={isInputDisabled}
      />
      <S.Btn onClick={handleClick} type="submit">
        {isInputDisabled ? content.enableUpdateName : content.confirmUpdateName}
      </S.Btn>
      {pending && <Spinner />}
    </S.Form>
  );
};

export default NameInput;
