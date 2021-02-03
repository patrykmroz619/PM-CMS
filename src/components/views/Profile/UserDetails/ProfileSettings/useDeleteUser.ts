import { useState } from "react";

import { deleteUser } from "@api/user";

type UseDeleteUserType = () => [boolean, () => void];

export const useDeleteUser: UseDeleteUserType = () => {
  const [pending, setPending] = useState(false);

  const handleDeleteUser = async () => {
    setPending(true);
    try {
      const response = await deleteUser();

      if (response.status == 204) {
        window.location.href = process.env.LANDING_PAGE_URL as string;
      }
    } catch {
      setPending(false);
      alert("something went wront"); // For dev
    }
  };

  return [pending, handleDeleteUser];
};
