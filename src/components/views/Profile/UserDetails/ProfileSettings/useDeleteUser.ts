import { useState } from "react";
import * as Sentry from "@sentry/react";
import { deleteUser } from "@api/user";
import { useNotification } from "@hooks";

type UseDeleteUserType = () => [boolean, () => void];

export const useDeleteUser: UseDeleteUserType = () => {
  const [pending, setPending] = useState(false);

  const { error } = useNotification();

  const handleDeleteUser = async () => {
    setPending(true);
    try {
      const response = await deleteUser();

      if (response.status == 204) {
        window.location.href = process.env.LANDING_PAGE_URL as string;
      }
    } catch (e: unknown) {
      setPending(false);
      Sentry.captureException(e);
      error("Something went wrong.");
    }
  };

  return [pending, handleDeleteUser];
};
