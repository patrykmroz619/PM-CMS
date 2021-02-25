import React from "react";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";

import { userSelector } from "@selectors";
import { ConditionalRoute } from "../ConditionalRoute";

export const AuthenticationRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = useSelector(userSelector.isAuthenticated);

  return (
    <ConditionalRoute available={!isAuthenticated} redirectTo="/panel" {...rest}>
      {children}
    </ConditionalRoute>
  );
};
