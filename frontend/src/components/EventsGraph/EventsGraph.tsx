import * as React from "react";
import { ErrorText } from "../ErrorText";
import { EventItem } from "@App/store/statistics/types";
import { Card, CardContent, CircularProgress, Grid } from "@material-ui/core";
import { VictoryPie } from "victory";
import { countBy } from "lodash";
import Title from "../Title";
import Subtitle from "../Subtitle";

interface Props {
  events: EventItem[];
  isFetching: boolean;
  error: string;
}

export default function EventsGraph(props: Props) {
  const { events, isFetching, error } = props;

  const RenderEventsGraph = () => {
    const humanReadableEvents = [];

    for (const event of events) {
      let eventType = event.event_type;
      eventType = eventType.replace(/_/g, " ");
      humanReadableEvents.push({
        event_type: eventType[0].toUpperCase() + eventType.slice(1)
      });
    }

    const groupedEvents = countBy(humanReadableEvents, "event_type");

    const graphableEventsArray = [];
    for (const key of Object.keys(groupedEvents).slice(0, 5)) {
      graphableEventsArray.push({ x: key, y: groupedEvents[key] });
    }

    return (
      <Grid
        container={true}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item={true} xs={5}>
          <VictoryPie
            colorScale="warm"
            data={graphableEventsArray}
            innerRadius={100}
          />
        </Grid>
        <Grid item={true} xs={7} style={{ textAlign: "center" }}>
          <Title>{events.length}</Title>
          <Subtitle>patient events</Subtitle>
        </Grid>
      </Grid>
    );
  };

  const renderErrorOrCard = () => {
    return error !== "" ? (
      <ErrorText>{error}</ErrorText>
    ) : (
      <RenderEventsGraph />
    );
  };

  return (
    <Card>
      <CardContent>
        {isFetching ? <CircularProgress /> : renderErrorOrCard()}
      </CardContent>
    </Card>
  );
}
