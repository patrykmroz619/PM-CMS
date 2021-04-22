import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { settingsPage as content } from "@content";
import { updateProject } from "@api/projects";
import { useNotification, useSubmitAndDispatch } from "@hooks";
import { currentProjectActions } from "@actions";
import { currentProjectSelector } from "@selectors";

import { P, Toggler } from "@common";
import * as S from "./styled";

const ProjectPublishingSection = () => {
  const isProjectPublished = useSelector(currentProjectSelector.published);
  const projectId = useSelector(currentProjectSelector.id);

  const { success, error: errorNotify } = useNotification();

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    updateProject,
    currentProjectActions.updateData,
    () =>
      success(isProjectPublished ? content.notPublishedNotification : content.publishedNotification)
  );

  useEffect(() => {
    if (error) {
      errorNotify(error);
    }
  }, [error]);

  const handleTogglerChange = () => {
    handleSubmit({ published: !isProjectPublished }, projectId);
  };

  return (
    <S.Box>
      <S.Heading>{content.publishingHeading}</S.Heading>
      <Toggler
        checked={isProjectPublished}
        onTogglerChange={handleTogglerChange}
        pending={pending}
        data-testid="toggler"
      />
      <P>{isProjectPublished ? content.publishedInfo : content.notPublishedInfo}</P>
    </S.Box>
  );
};

export default ProjectPublishingSection;
