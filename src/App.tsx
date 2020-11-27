import React from "react";
import { Switch } from "react-router-dom";

import { useAuth } from "hooks/useAuth";
import { PrivateRoute, AuthorizationRoute, Spinner, GradientBg } from "@common";

const LoginPage = React.lazy(() => import("@views/login"));
const RegisterPage = React.lazy(() => import("@views/register"));
const Layout = React.lazy(() => import("./layout"));

const App: React.FC = () => {
  const loading = useAuth();

  return !loading ? (
    <>
      <Switch>
        <AuthorizationRoute path="/login">
          <LoginPage />
        </AuthorizationRoute>
        <AuthorizationRoute path="/register">
          <RegisterPage />
        </AuthorizationRoute>
      </Switch>
      <PrivateRoute path="/panel">
        <Layout>
          <Switch></Switch>
        </Layout>
      </PrivateRoute>
    </>
  ) : (
    <GradientBg>
      <Spinner />
    </GradientBg>
  );
};

export default App;
