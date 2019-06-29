import { call, put, takeEvery } from "redux-saga/effects";
import { authActions, Id } from "./types";
import { authSuccess, authFailure } from "./authActions";
import AuthService from "../../services/auth.service";

function* signIn(action: string, payload: Id) {
  try {
    const response = yield call(AuthService.signIn, payload);
    if (response.status === 200 || response.status === 201) {
      yield put(authSuccess(response.data));
    } else {
      yield put(authFailure(response.data));
    }
  } catch (e) {
    yield put(authFailure(e.response.data.error));
  }
}

function* authSaga() {
  yield takeEvery(authActions.SIGN_IN, signIn);
}

export default authSaga;
