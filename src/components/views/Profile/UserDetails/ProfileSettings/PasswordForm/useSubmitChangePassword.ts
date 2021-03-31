import { useState } from "react";
import * as Sentry from "@sentry/react";
import { changePassword } from "@api/user";
import { useNotification } from "@hooks";
import { profilePage as content } from "@content";
import { isApiError, isAxiosError } from "@utils";

type UseSubmitChangePasswordType = (
  onSucces: () => void
) => [boolean, string, (values: PasswordChangeFormData) => void];

export const useSubmitChangePassword: UseSubmitChangePasswordType = (onSucces) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const { success } = useNotification();

  const handleSubmit = async (values: PasswordChangeFormData) => {
    setPending(true);
    setError("");
    try {
      await changePassword(values);
      setPending(false);
      success(content.updatePasswordForm.successNotification);
      onSucces();
    } catch (e: unknown) {
      setPending(false);
      if (isAxiosError(e) && isApiError(e.response?.data)) {
        setError(e.response?.data.error.description || "");
      } else {
        Sentry.captureException(e);
        setError("Something went wrong. Pleasy try again later.");
      }
    }
  };

  return [pending, error, handleSubmit];
};
