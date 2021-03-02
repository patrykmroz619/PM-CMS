import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "@routes";
import { deleteRecord } from "@api/records";
import { currentProjectActions } from "@actions";
import { useNotification } from "@hooks";
import { singleRecordPage as content } from "@content";

type UseDeleteRecordHandlingType = (recordId: string) => [boolean, () => void];

export const useDeleteRecordHandling: UseDeleteRecordHandlingType = (recordId) => {
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const { success, error } = useNotification();

  const handleDeleteRecord = async () => {
    setPending(true);
    try {
      const response = await deleteRecord(recordId);

      if (response.status === 204) {
        console.log(response);
        dispatch(currentProjectActions.deleteRecord({ id: recordId }));
        success(content.successDeleteNotification);
        history.push(routes.records);
      }
    } catch {
      setPending(false);
      error(content.rejectedDeleteNotification);
    }
  };

  return [pending, handleDeleteRecord];
};
