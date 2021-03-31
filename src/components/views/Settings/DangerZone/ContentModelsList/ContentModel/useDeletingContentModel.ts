import { useState } from "react";
import { useDispatch } from "react-redux";
import * as Sentry from "@sentry/react";

import { currentProjectActions } from "@actions";
import { deleteContentModel } from "@api/contentModels";
import { settingsPage as content } from "@content";
import { useNotification } from "@hooks";

type PendingType = boolean;
type HandleDeleteType = (contentModelId: string) => void;

type UseDeletingContentModelType = () => [PendingType, HandleDeleteType];

const useDeletingContentModel: UseDeletingContentModelType = () => {
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();
  const { success, error } = useNotification();

  const handleDelete = async (contentModelId: string) => {
    setPending(true);
    try {
      const response = await deleteContentModel(contentModelId);

      if (response.status == 204) {
        success(content.deleteModelSuccessNotification);
        dispatch(currentProjectActions.deleteContentModel(contentModelId));
      }
    } catch (e: unknown) {
      Sentry.captureException(e);
      error(content.deleteModelError);
      setPending(false);
    }
  };

  return [pending, handleDelete];
};

export default useDeletingContentModel;
