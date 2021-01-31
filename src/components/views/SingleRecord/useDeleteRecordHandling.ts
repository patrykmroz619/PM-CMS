import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "@routes";
import { deleteRecord } from "@api/records";
import { currentProjectActions } from "@actions";

type UseDeleteRecordHandlingType = (recordId: string) => [boolean, () => void];

export const useDeleteRecordHandling: UseDeleteRecordHandlingType = (recordId) => {
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleDeleteRecord = async () => {
    setPending(true);
    try {
      const response = await deleteRecord(recordId);

      if (response.status === 204) {
        console.log(response);
        dispatch(currentProjectActions.deleteRecord({ id: recordId }));
        history.push(routes.records);
      }
    } catch {
      setPending(false);
    }
  };

  return [pending, handleDeleteRecord];
};