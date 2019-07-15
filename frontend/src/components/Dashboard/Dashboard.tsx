import * as React from "react";
import Header from "../Header";
import { StatisticsState } from "@App/store/statistics/types";
import EventsTable from "../EventsTable";
import { GlobalStyle } from "./style";
import { Grid } from "@material-ui/core";
import MoodCard from "../MoodCard";
import MoodGraph from "../MoodGraph";
import EventsGraph from "../EventsGraph";

export interface ComponentState {}

export interface DispatchProps {
  getHistory: () => void;
  getMoods: () => void;
}

type Props = StatisticsState & DispatchProps;

export default class Dashboard extends React.Component<Props, ComponentState> {
  public componentDidMount() {
    this.props.getHistory();
    this.props.getMoods();
  }

  public render() {
    const { events, moods } = this.props;
    return (
      <>
        <GlobalStyle />
        <Header />
        <Grid
          container={true}
          spacing={1}
          direction="row"
          style={{ minHeight: "100vh" }}
        >
          <Grid item={true} xs={2} />
          <Grid item={true} xs={8}>
            <MoodCard
              isFetching={moods.isFetching}
              error={moods.error}
              moods={moods.moods}
            />
          </Grid>
          <Grid item={true} xs={2} />
          <Grid item={true} xs={2} />
          <Grid item={true} xs={4}>
            <MoodGraph
              isFetching={moods.isFetching}
              error={moods.error}
              moods={moods.moods}
            />
          </Grid>
          <Grid item={true} xs={4}>
            <EventsGraph
              isFetching={events.isFetching}
              error={events.error}
              events={events.events}
            />
          </Grid>
          <Grid item={true} xs={2} />
          <Grid item={true} xs={2} />
          <Grid item={true} xs={8}>
            <EventsTable
              isFetching={events.isFetching}
              error={events.error}
              events={events.events}
            />
          </Grid>
          <Grid item={true} xs={2} />
        </Grid>
      </>
    );
  }
}
