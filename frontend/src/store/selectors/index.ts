import { AppState } from "../reducers";

export const isAuthenticated = (state: AppState) =>
  state.auth.token.length !== 0;
