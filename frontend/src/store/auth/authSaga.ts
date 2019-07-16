import { all, call, put, takeEvery } from "redux-saga/effects";
import { push } from "connected-react-router";
import { authActions, SignIn } from "./types";
import { authSuccess, authFailure } from "./authActions";
import AuthService from "../../services/auth.service";

function* signIn(action: SignIn) {
  try {
    const response = yield call(AuthService.signIn, action.payload);
    if (response.status === 200 || response.status === 201) {
      yield put(authSuccess(response.data));
      yield put(push("/dashboard"));
    } else {
      yield put(authFailure({ error: response.data.error }));
    }
  } catch (e) {
    yield put(authFailure({ error: e.response.data.error }));
  }
}

function* signOut() {
  yield put(push("/"));
}

function* authSaga() {
  yield all([
    takeEvery(authActions.SIGN_IN, signIn),
    takeEvery(authActions.SIGN_OUT, signOut)
  ]);
}

export default authSaga;
