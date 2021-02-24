/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AxiosPromise } from "axios";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

type ApiCall<T, K> = (data: T, param?: any) => AxiosPromise<K>;
type SuccessAction<T> = ActionCreatorWithPayload<T>;

type Pending = boolean;
type Error = string | undefined;
type SubmitHandler<T> = (data: T, param?: string) => void;

type UseSubmitAndDispatchType = <T, K>(
  apiCall: ApiCall<T, K>,
  successAction: SuccessAction<K>,
  onSuccess?: () => void
) => [Pending, Error, SubmitHandler<T>];

export const useSubmitAndDispatch: UseSubmitAndDispatchType = (
  apiCall,
  successAction,
  onSuccess
) => {
  const [error, setError] = useState<Error>();
  const [pending, setPending] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (data: any, param?: string) => {
    try {
      setPending(true);
      setError("");
      const response = await apiCall(data, param);

      dispatch(successAction(response.data));

      setPending(false);
      if (onSuccess) {
        onSuccess();
      }
    } catch (e) {
      const error = e?.response.data.error?.description;
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
