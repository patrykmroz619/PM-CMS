import { useState } from "react";

import { changePassword } from "@api/user";

type UseSubmitChangePasswordType = (
  onSucces: () => void
) => [boolean, string, (values: PasswordChangeFormData) => void];

export const useSubmitChangePassword: UseSubmitChangePasswordType = (onSucces) => {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values: PasswordChangeFormData) => {
    setPending(true);
    setError("");
    try {
      await changePassword(values);
      setPending(false);
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
