import { authActions, AuthState, AuthActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: AuthState = {
  token: "",
  error: "",
  isFetching: false
};

export const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case authActions.SIGN_IN:
      return {
        ...state,
        isFetching: true
      };
    case authActions.AUTHENTICATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isFetching: false
      };
    case authActions.AUTHENTICATION_FAILURE:
      return {
        ...state,
        ...action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
