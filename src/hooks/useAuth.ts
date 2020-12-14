import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authUser } from "@fetch";
import { userSelector } from "@selectors";

export const useAuth = (): boolean => {
  const dispatch = useDispatch();
  const loading = useSelector(userSelector.loading);

  useEffect(() => {
    dispatch(authUser());
  }, []);

  return loading;
};
