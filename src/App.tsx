import React from "react";
import { Switch } from "react-router-dom";

import { useAuth } from "hooks/useAuth";
import { PrivateRoute, AuthenticationRoute, Spinner, GradientBg } from "@common";

const LoginPage = React.lazy(() => import("@views/login"));
const RegisterPage = React.lazy(() => import("@views/register"));
const Layout = React.lazy(() => import("./layout"));

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
