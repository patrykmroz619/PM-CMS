import { user } from "@selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "store/fetch/userFetch";

export const useAuth = (): boolean => {
  const dispatch = useDispatch();
  const loading = useSelector(user.selectLoading);

  useEffect(() => {
    console.log("auth");
    dispatch(authUser());
  }, [dispatch]);

  return loading;
};
