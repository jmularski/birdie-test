import * as React from "react";
import Header from "../Header";
import { StatisticsState } from "@App/store/statistics/types";
import EventsTable from "../EventsTable";
import { GlobalStyle } from "./style";
import { Grid } from "@material-ui/core";

export interface ComponentState {}

export interface DispatchProps {
  getHistory: () => void;
}

type Props = StatisticsState & DispatchProps;

export default class Dashboard extends React.Component<Props, ComponentState> {
  public componentDidMount() {
    this.props.getHistory();
  }

  public render() {
    const { isFetching, error, events } = this.props.events;
    return (
      <>
        <GlobalStyle />
        <Header />
        <Grid
          container={true}
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item={true} xs={11}>
            <EventsTable
              isFetching={isFetching}
              error={error}
              events={events}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
