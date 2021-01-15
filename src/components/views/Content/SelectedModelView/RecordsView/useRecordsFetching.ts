import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getRecords } from "@fetch";

export const useRecordsFetching = (model: ContentModel) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!model.records || model.records.length == 0) {
      dispatch(getRecords(model.id));
    }
  }, []);
};
