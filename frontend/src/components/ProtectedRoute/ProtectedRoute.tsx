import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";

export interface StateProps {
  isAuthenticated: boolean;
}

type ProtectedRouteProps = StateProps & RouteProps;

export default class ProtectedRoute extends Route<ProtectedRouteProps> {
  public render() {
    if (!this.props.isAuthenticated) {
      const renderComponent = () => <Redirect to={{ pathname: "/" }} />;
      return (
        <Route {...this.props} component={renderComponent} render={undefined} />
      );
    } else {
      return <Route {...this.props} />;
    }
  }
}
