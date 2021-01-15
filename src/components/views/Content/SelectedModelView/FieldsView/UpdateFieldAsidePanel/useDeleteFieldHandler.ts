import { useState } from "react";

import { deleteField } from "@api/fields";
import { currentProjectActions } from "@actions";
import { useDispatch, useSelector } from "react-redux";
import currentProjectSelectors from "store/selectors/currentProjectSelectors";

type DeleteHandlerType = (fieldId: string) => void;

type UseDeleteFieldHandlerType = (onSuccess: () => void) => [boolean, DeleteHandlerType];

const useDeleteFieldHandler: UseDeleteFieldHandlerType = (onSuccess) => {
  const [pending, setPending] = useState(false);

  const contentModelId = useSelector(currentProjectSelectors.selectedModelId);

  const dispatch = useDispatch();

  const handleDelete = async (fieldId: string) => {
    if (contentModelId) {
      try {
        setPending(true);
        await deleteField(fieldId, contentModelId);
        dispatch(currentProjectActions.deleteField({ fieldId }));
        onSuccess();
      } catch (e) {
        console.log(e); //TODO: message to logger
      } finally {
        setPending(false);
      }
    }
  };

  return [pending, handleDelete];
};

export default useDeleteFieldHandler;
