import { useAuth } from "hooks/useAuth";
import React from "react";
import { Switch, Route } from "react-router-dom";

const LoginPage = React.lazy(() => import("@views/login"));
const RegisterPage = React.lazy(() => import("@views/register"));

const App: React.FC = () => {
  useAuth();

  return (
    <Switch>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
    </Switch>
  );
};

export default App;
