import { all, call, put, takeEvery, select } from "redux-saga/effects";
import { GetHistory, statisticsActions, GetMoods } from "./types";
import StatisticsService from "@App/services/statistics.service";
import { getToken } from "../selectors";
import {
  getHistoryFailure,
  getHistorySuccess,
  getMoodsFailure,
  getMoodsSuccess
} from "./statisticsActions";

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

function* getMoods(action: GetMoods) {
  try {
    const token = yield select(getToken);
    const response = yield call(StatisticsService.getMoods, token);
    if (response.status === 200) {
      yield put(getMoodsSuccess(response.data));
    } else {
      yield put(getMoodsFailure({ error: response.data.error }));
    }
  } catch (e) {
    yield put(getMoodsFailure({ error: e.response.data.error }));
  }
}

function* statisticsSaga() {
  yield all([
    takeEvery(statisticsActions.GET_HISTORY, getHistory),
    takeEvery(statisticsActions.GET_MOODS, getMoods)
  ]);
}

export default statisticsSaga;
