import { combineReducers } from "redux";
import { authReducer } from "../auth/authReducer";

export type RootState = Readonly<{}>;

export const rootReducer = combineReducers<RootState>({
  auth: authReducer
});
