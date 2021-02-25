import React from "react";
import { useSelector } from "react-redux";
import { RouteProps } from "react-router-dom";

import { userSelector } from "@selectors";
import { ConditionalRoute } from "../ConditionalRoute";

export const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = useSelector(userSelector.isAuthenticated);

  return (
    <ConditionalRoute available={isAuthenticated} redirectTo="/login" {...rest}>
      {children}
    </ConditionalRoute>
  );
};
