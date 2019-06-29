import { all, spawn } from "redux-saga/effects";

import authSaga from "../auth/authSaga";

function* initSaga() {
  yield all([spawn(authSaga)]);
}

export default initSaga;
