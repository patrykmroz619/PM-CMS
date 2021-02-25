import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

type ConditionalRouteProps = RouteProps & {
  available: boolean;
  redirectTo: string;
};

export const ConditionalRoute = ({
  available,
  children,
  redirectTo,
  ...props
}: ConditionalRouteProps) => {
  return (
    <Route
      {...props}
      render={({ location }) =>
        available ? children : <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
      }
    />
  );
};
