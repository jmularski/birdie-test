import styled, { createGlobalStyle } from "styled-components";
import { Card, CircularProgress } from "@material-ui/core";

interface Props {
  isFetching: boolean;
}

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  filter: ${(props: Props) => (props.isFetching ? "blur(8px)" : "blur(0px)")};
`;

export const StyledCard = styled(Card)`
  width: 30%;
  height: 30%;
  text-align: center;
  padding: 2%;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  bottom: 47%;
  right: 47%;
  position: absolute;
  z-index: 999;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12;
`;
