import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteField } from "@api/fields";
import { currentProjectActions } from "@actions";
import { useNotification } from "@hooks";
import { currentProjectSelector } from "@selectors";
import { contentModelsPage as content } from "@content";

type DeleteHandlerType = (fieldId: string) => void;

type UseDeleteFieldHandlerType = (onSuccess: () => void) => [boolean, DeleteHandlerType];

const useDeleteFieldHandler: UseDeleteFieldHandlerType = (onSuccess) => {
  const [pending, setPending] = useState(false);

  const contentModelId = useSelector(currentProjectSelector.selectedModelId);

  const { success, error } = useNotification();
  const dispatch = useDispatch();

  const handleDelete = async (fieldId: string) => {
    if (contentModelId) {
      try {
        setPending(true);
        await deleteField(fieldId, contentModelId);
        dispatch(currentProjectActions.deleteField({ fieldId }));
        success(content.updateFieldPanel.successDeleteNotification);
        onSuccess();
      } catch (e) {
        error(content.updateFieldPanel.errorDeleteNotification);
      } finally {
        setPending(false);
      }
    }
  };

  return [pending, handleDelete];
};

export default useDeleteFieldHandler;
