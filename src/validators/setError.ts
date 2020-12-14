type Error = string | undefined;
type ErrorObject<T> = Partial<Record<keyof T, Error>>;

export const setError = <T>(obj: ErrorObject<T>, key: keyof T, error: Error): void => {
  if (error) {
    obj[key] = error;
  } else {
    delete obj[key];
  }
};
