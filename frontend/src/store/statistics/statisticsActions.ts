import { StatisticsActionsTypes, statisticsActions, Events } from "./types";
import { Error } from "../auth/types";

export function getHistory(): StatisticsActionsTypes {
  return {
    type: statisticsActions.GET_HISTORY
  };
}

export function getHistorySuccess(payload: Events): StatisticsActionsTypes {
  return {
    type: statisticsActions.GET_HISTORY_SUCCESS,
    payload
  };
}

export function getHistoryFailure(payload: Error): StatisticsActionsTypes {
  return {
    type: statisticsActions.GET_HISTORY_FAILURE,
    payload
  };
}
