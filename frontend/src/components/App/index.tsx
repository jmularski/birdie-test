import { signIn } from "@store/auth/authActions";
import { AppState } from "@store/reducers";
import { Id } from "@store/auth/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import App, { StateProps, DispatchProps } from "./App";

const mapStateToProps = (state: AppState): StateProps => ({
  token: state.auth.token,
  error: state.auth.error,
  isFetching: state.auth.isFetching
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signIn: (id: Id) => dispatch(signIn(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
