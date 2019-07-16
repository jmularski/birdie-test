export enum authActions {
  SIGN_IN = "SIGN_IN",
  AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS",
  AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE",
  SIGN_OUT = "SIGN_OUT"
}

export interface Id {
  id: string;
}

export interface Token {
  token: string;
}

export interface Error {
  error: string;
}

export interface AuthState {
  isFetching: boolean;
  error: string;
  token: string;
}

export interface SignIn {
  type: typeof authActions.SIGN_IN;
  payload: Id;
}

interface AuthSuccess {
  type: typeof authActions.AUTHENTICATION_SUCCESS;
  payload: Token;
}

interface AuthFailure {
  type: typeof authActions.AUTHENTICATION_FAILURE;
  payload: Error;
}

interface SignOut {
  type: typeof authActions.SIGN_OUT;
}

export type AuthActionTypes = SignIn | AuthSuccess | AuthFailure | SignOut;
