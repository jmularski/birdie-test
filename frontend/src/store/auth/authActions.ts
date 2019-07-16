import { authActions, Id, Token, Error, AuthActionTypes } from "./types";

export function signIn(payload: Id): AuthActionTypes {
  return {
    type: authActions.SIGN_IN,
    payload
  };
}

export function authSuccess(payload: Token): AuthActionTypes {
  return {
    type: authActions.AUTHENTICATION_SUCCESS,
    payload
  };
}

export function authFailure(payload: Error): AuthActionTypes {
  return {
    type: authActions.AUTHENTICATION_FAILURE,
    payload
  };
}

export function signOut(): AuthActionTypes {
  return {
    type: authActions.SIGN_OUT
  };
}