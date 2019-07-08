export enum statisticsActions {
  GET_HISTORY = "GET_HISTORY",
  GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS",
  GET_HISTORY_FAILURE = "GET_HISTORY_FAILURE"
}

interface EventItem {
  event_type: string;
  timestamp: Date;
}

export interface Events {
  events: EventItem[];
}

export interface Error {
  error: string;
}

interface EventsState extends Events {
  isFetching: boolean;
  error: string;
}

export interface StatisticsState {
  events: EventsState;
}

export interface GetHistory {
  type: typeof statisticsActions.GET_HISTORY;
}

export interface GetHistorySuccess {
  type: typeof statisticsActions.GET_HISTORY_SUCCESS;
  payload: Events;
}

export interface GetHistoryFailure {
  type: typeof statisticsActions.GET_HISTORY_FAILURE;
  payload: Error;
}

export type StatisticsActionsTypes =
  | GetHistory
  | GetHistorySuccess
  | GetHistoryFailure;
