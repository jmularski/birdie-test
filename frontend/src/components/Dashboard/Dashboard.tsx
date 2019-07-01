import * as React from "react";
import Header from "../Header";

export interface ComponentState {}

export interface StateProps {}

export interface DispatchProps {}

type Props = StateProps & DispatchProps;

export default class Dashboard extends React.Component<Props, ComponentState> {
  public render() {
    return (
      <>
        <Header />
      </>
    );
  }
}
