import { call, put, takeEvery, select } from "redux-saga/effects";
import { GetHistory, statisticsActions } from "./types";
import StatisticsService from "@App/services/statistics.service";
import { getToken } from "../selectors";
import { getHistoryFailure, getHistorySuccess } from "./statisticsActions";

function* getHistory(action: GetHistory) {
  try {
    const token = yield select(getToken);
    const response = yield call(StatisticsService.getHistory, token);
    if (response.status === 200) {
      yield put(getHistorySuccess(response.data));
    } else {
      yield put(getHistoryFailure({ error: response.data.error }));
    }
  } catch (e) {
    yield put(getHistoryFailure({ error: e.response.data.error }));
  }
}

function* statisticsSaga() {
  yield takeEvery(statisticsActions.GET_HISTORY, getHistory);
}

export default statisticsSaga;
