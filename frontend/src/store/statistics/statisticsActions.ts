import {
  StatisticsActionsTypes,
  statisticsActions,
  Events,
  Moods
} from "./types";
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

export function getMoods(): StatisticsActionsTypes {
  return {
    type: statisticsActions.GET_MOODS
  };
}

export function getMoodsSuccess(payload: Moods): StatisticsActionsTypes {
  return {
    type: statisticsActions.GET_MOODS_SUCCESS,
    payload
  };
}

export function getMoodsFailure(payload: Error): StatisticsActionsTypes {
  return {
    type: statisticsActions.GET_MOODS_FAILURE,
    payload
  };
}
