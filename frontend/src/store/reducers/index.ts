import { combineReducers } from "redux";
import { authReducer } from "../auth/authReducer";
import { AuthState } from "../auth/types";
import { History } from "history";
import { connectRouter, RouterState } from "connected-react-router";

export interface AppState {
  readonly auth: AuthState;
  readonly router: RouterState;
}

export const rootReducer = (history: History) =>
  combineReducers<AppState>({
    auth: authReducer,
    router: connectRouter(history)
  });
