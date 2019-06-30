import { combineReducers } from "redux";
import { authReducer } from "../auth/authReducer";
import { AuthState } from "../auth/types";

export interface AppState {
  readonly auth: AuthState;
}

export const rootReducer = combineReducers<AppState>({
  auth: authReducer
});
