import React from "react";
import { useSelector } from "react-redux";

import { userSelector } from "@selectors";

import UserDetails from "./UserDetails";
import ErrorMessage from "./ErrorMessage";

const ProfileView = () => {
  const userData = useSelector(userSelector.data);

  if (!userData) return <ErrorMessage />;

  return <UserDetails userData={userData} />;
};

export default ProfileView;
