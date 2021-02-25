import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { settingsPage as content } from "@content";
import { updateProject } from "@api/projects";
import { useSubmitAndDispatch } from "@hooks";
import { currentProjectActions } from "@actions";
import { currentProjectSelector } from "@selectors";

import { P, Toggler } from "@common";
import * as S from "./styled";

const ProjectPublishingSection = () => {
  const isProjectPublished = useSelector(currentProjectSelector.published);
  const projectId = useSelector(currentProjectSelector.id);

  const [pending, error, handleSubmit] = useSubmitAndDispatch(
    updateProject,
    currentProjectActions.updateData
  );

  useEffect(() => {
    if (error) {
      alert(error); //TODO: Log errors
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
      />
      <P>{isProjectPublished ? content.publishedInfo : content.notPublishedInfo}</P>
    </S.Box>
  );
};

export default ProjectPublishingSection;
