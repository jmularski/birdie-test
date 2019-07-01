import * as React from "react";

export interface ComponentState {}

export interface StateProps {}

export interface DispatchProps {}

type Props = StateProps & DispatchProps;

export default class Dashboard extends React.Component<Props, ComponentState> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return <div />;
  }
}
