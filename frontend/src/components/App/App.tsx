import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Card, TextField, Button } from "@material-ui/core";
import Title from "../Title";
import Subtitle from "../Subtitle";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCard = styled(Card)`
  width: 30%;
  height: 30%;
  text-align: center;
  padding: 2%;
`;

// const PRIMARY_COLOR = '#6b61c4';

interface AppProps {}
interface AppState {
  code: string;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      code: ""
    };
  }

  handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ code: event.target.value });

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <StyledCard>
            <Title>Login to the service</Title>
            <Subtitle>Use code we gave you to login to the service</Subtitle>
            <TextField
              label="Code"
              value={this.state.code}
              onChange={this.handleCodeChange}
              margin="normal"
              variant="outlined"
            />
            <br />
            <Button color="primary" variant="outlined">
              Sign in
            </Button>
          </StyledCard>
        </AppContainer>
      </>
    );
  }
}
