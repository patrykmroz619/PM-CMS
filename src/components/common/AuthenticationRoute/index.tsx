import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { userSelector } from "@selectors";

export const AuthenticationRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = useSelector(userSelector.isAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Redirect to={{ pathname: "/panel", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
};
