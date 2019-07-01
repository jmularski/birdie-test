import * as React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

export interface ComponentState {}

export interface StyleProps {
  classes: {
    root: string;
    title: string;
  };
}

export default class Dashboard extends React.Component<
  StyleProps,
  ComponentState
> {
  public render() {
    const { classes } = this.props;

    return (
      <header className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Birdie
            </Typography>
            <Button variant="outlined" color="secondary">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}
