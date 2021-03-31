/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

export const isAxiosError = (e: any): e is AxiosError<unknown> => e.isAxiosError as boolean;

export const isApiError = (e: any): e is ApiError => {
  if (e.statusCode && e.error.type && e.error.description) {
    return true;
  }

  return false;
};
