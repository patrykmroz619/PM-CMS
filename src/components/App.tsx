import React from "react";
import { Switch } from "react-router-dom";

import { useAuth } from "@hooks";
import { PrivateRoute, AuthenticationRoute, Spinner, GradientBg } from "@common";

const LoginPage = React.lazy(() => import("./pages/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const PanelPage = React.lazy(() => import("./pages/Panel"));

const App: React.FC = () => {
  const loading = useAuth();

  return !loading ? (
    <>
      <Switch>
        <AuthenticationRoute path="/login">
          <LoginPage />
        </AuthenticationRoute>
        <AuthenticationRoute path="/register">
          <RegisterPage />
        </AuthenticationRoute>
      </Switch>
      <PrivateRoute path="/panel">
        <PanelPage />
      </PrivateRoute>
    </>
  ) : (
    <GradientBg>
      <Spinner />
    </GradientBg>
  );
};

export default App;
