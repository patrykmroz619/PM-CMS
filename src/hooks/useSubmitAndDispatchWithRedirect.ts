/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AxiosPromise } from "axios";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type ApiCall<T, K> = (data: T, param?: any) => AxiosPromise<K>;
type SuccessAction<T> = ActionCreatorWithPayload<T>;

type Pending = boolean;
type Error = string | null;
type SubmitHandler<T> = (data: T, param?: string) => void;

type UseSubmitAndDispatchWithRedirectType = <T, K>(
  apiCall: ApiCall<T, K>,
  successAction: SuccessAction<K>,
  redirectTo: string
) => [Pending, Error, SubmitHandler<T>];

export const useSubmitAndDispatchWithRedirect: UseSubmitAndDispatchWithRedirectType = (
  apiCall,
  successAction,
  redirectTo
) => {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (data: any, param?: string) => {
    try {
      setPending(true);
      setError("");
      const response = await apiCall(data, param);

      dispatch(successAction(response.data));
      history.push(redirectTo);
    } catch (e) {
      const error = e?.response.data.error.description;
      if (error) {
        setError(e.response.data.error.description);
      } else {
        setError("Something went wrong. Pleasy try again later.");
      }
      setPending(false);
    }
  };

  return [pending, error, handleSubmit];
};
