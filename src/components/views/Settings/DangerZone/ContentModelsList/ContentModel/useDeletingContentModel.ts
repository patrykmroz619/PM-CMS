import { currentProjectActions } from "@actions";
import { deleteContentModel } from "@api/contentModels";
import { useState } from "react";
import { useDispatch } from "react-redux";

type PendingType = boolean;
type ErrorType = boolean;
type HandleDeleteType = (contentModelId: string) => void;

type UseDeletingContentModelType = () => [PendingType, ErrorType, HandleDeleteType];

const useDeletingContentModel: UseDeletingContentModelType = () => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = async (contentModelId: string) => {
    setPending(true);
    setError(false);
    try {
      const response = await deleteContentModel(contentModelId);

      if (response.status == 204) {
        dispatch(currentProjectActions.deleteContentModel(contentModelId));
      }
    } catch (e) {
      setError(true);
      setPending(false);
    }
  };

  return [pending, error, handleDelete];
};

export default useDeletingContentModel;
