import React from "react";
import { Switch, Route } from "react-router-dom";

import LoginPage from "@views/login";
import PanelCore from "@views/panelCore";
import RegisterPage from "@views/register";

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={PanelCore}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
    </Switch>
  );
};

export default App;
