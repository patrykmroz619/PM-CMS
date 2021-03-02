import { useState } from "react";

import { changePassword } from "@api/user";
import { useNotification } from "@hooks";
import { profilePage as content } from "@content";

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
    } catch (e) {
      setPending(false);
      if (e.response.data.error.description) {
        setError(e.response.data.error.description);
      } else {
        setError("Something went wrong. Try again later.");
      }
    }
  };

  return [pending, error, handleSubmit];
};
