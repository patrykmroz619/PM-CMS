import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { user } from "@selectors";

export const AuthorizationRoute = ({ children, ...rest }: RouteProps) => {
  const isAuthenticated = useSelector(user.selectIsAuthenticated);

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
