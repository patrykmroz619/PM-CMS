import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUser } from "store/fetch/userFetch";

export const useAuth = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authUser());
  }, [dispatch]);
};
