import * as React from "react";
import store, { webHistory } from "@App/store";
import { Provider } from "react-redux";
import LoginPage from "@App/components/LoginPage";
import Dashboard from "@App/components/Dashboard";

import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import ProtectedRoute from "./components/ProtectedRoute";

export const Application = () => (
  <Provider store={store}>
    <ConnectedRouter history={webHistory}>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);