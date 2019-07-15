import { all, spawn } from "redux-saga/effects";

import authSaga from "../auth/authSaga";
import statisticsSaga from "../statistics/statisticsSaga";

function* initSaga() {
  yield all([spawn(authSaga)]);
  yield all([spawn(statisticsSaga)]);
}

export default initSaga;
