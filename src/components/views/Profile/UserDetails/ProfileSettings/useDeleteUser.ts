import { useHistory } from "react-router-dom";

import { deleteUser } from "@api/user";
import routes from "@routes";
import { useState } from "react";

type UseDeleteUserType = () => [boolean, () => void];

export const useDeleteUser: UseDeleteUserType = () => {
  const [pending, setPending] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleDeleteUser = async () => {
    setPending(true);
    setError(false);
    try {
      const response = await deleteUser();

      if (response.status == 204) {
        history.push(routes.login);
      }
    } catch {
      setPending(false);
      setError(true);
      alert("something went wront"); // For dev
    }
  };

  return [pending, handleDeleteUser];
};
