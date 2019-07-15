import * as React from "react";
import { Card, CardContent, CircularProgress, Grid } from "@material-ui/core";
import { Mood } from "@store/statistics/types";
import { ErrorText } from "../ErrorText";
import { countBy } from "lodash";
import { VictoryPie } from "victory";
import Title from "../Title";
import Subtitle from "../Subtitle";

interface Props {
  moods: Mood[];
  isFetching: boolean;
  error: string;
}

export default function MoodGraph(props: Props) {
  const { moods, isFetching, error } = props;

  const RenderMoodGraph = () => {
    const groupedMoods = countBy(moods, "mood");

    const graphableMoodArray = [];
    for (const key of Object.keys(groupedMoods)) {
      graphableMoodArray.push({ x: key, y: groupedMoods[key] });
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
            colorScale={["green", "yellow", "red"]}
            data={graphableMoodArray}
            innerRadius={100}
          />
        </Grid>
        <Grid item={true} xs={7} style={{ textAlign: "center" }}>
          <Title>{moods.length}</Title>
          <Subtitle>moods observations</Subtitle>
        </Grid>
      </Grid>
    );
  };

  const renderErrorOrCard = () => {
    return error !== "" ? <ErrorText>{error}</ErrorText> : <RenderMoodGraph />;
  };

  return (
    <Card>
      <CardContent>
        {isFetching ? <CircularProgress /> : renderErrorOrCard()}
      </CardContent>
    </Card>
  );
}
