import * as React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

export interface ComponentState {}

interface StyleProps {
  classes: {
    root: string;
    title: string;
  };
}

interface InheritedProps {
  signOut: () => void;
}

type Props = StyleProps & InheritedProps;

export default class Dashboard extends React.Component<
  Props,
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
            <Button 
              variant="outlined" 
              color="secondary"
              onClick={() => this.props.signOut()}  
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}
