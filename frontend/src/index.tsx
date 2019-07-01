import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import store, { webHistory } from "@App/store";
import { Provider } from "react-redux";
import App from "@App/components/App";
import Dashboard from "@App/components/Dashboard";

import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={webHistory}>
      <Switch>
        <Route exact={true} path="/" component={App} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
