import { combineReducers } from "redux";
import { authReducer } from "../auth/authReducer";
import { statisticsReducer } from "../statistics/statisticsReducer";
import { AuthState } from "../auth/types";
import { StatisticsState } from "../statistics/types";
import { History } from "history";
import { connectRouter, RouterState } from "connected-react-router";

export interface AppState {
  readonly auth: AuthState;
  readonly statistics: StatisticsState;
  readonly router: RouterState;
}

export const rootReducer = (history: History) =>
  combineReducers<AppState>({
    auth: authReducer,
    statistics: statisticsReducer,
    router: connectRouter(history)
  });
