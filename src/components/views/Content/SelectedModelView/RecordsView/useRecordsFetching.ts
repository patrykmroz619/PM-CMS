import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecords } from "@fetch";
import currentProjectSelectors from "store/selectors/currentProjectSelectors";

export const useRecordsFetching = (model: ContentModel) => {
  const dispatch = useDispatch();

  const loading = useSelector(currentProjectSelectors.recordsLoading);

  useEffect(() => {
    if (!model.records || model.records.length == 0) {
      dispatch(getRecords(model.id));
    }
  }, []);

  return loading;
};
