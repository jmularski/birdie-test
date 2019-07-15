export enum statisticsActions {
  GET_HISTORY = "GET_HISTORY",
  GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS",
  GET_HISTORY_FAILURE = "GET_HISTORY_FAILURE",
  GET_MOODS = "GET_MOODS",
  GET_MOODS_SUCCESS = "GET_MOODS_SUCCESS",
  GET_MOODS_FAILURE = "GET_MOODS_FAILURE"
}

export interface EventItem {
  event_type: string;
  timestamp: Date;
}

export interface Events {
  events: EventItem[];
}

export interface Mood {
  mood: string;
  timestamp: string;
}

export interface Moods {
  moods: Mood[];
}

export interface Error {
  error: string;
}

export interface EventsState extends Events {
  isFetching: boolean;
  error: string;
}

export interface MoodsState extends Moods {
  isFetching: boolean;
  error: string;
}

export interface StatisticsState {
  events: EventsState;
  moods: MoodsState;
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

export interface GetMoods {
  type: typeof statisticsActions.GET_MOODS;
}

export interface GetMoodsSuccess {
  type: typeof statisticsActions.GET_MOODS_SUCCESS;
  payload: Moods;
}

export interface GetMoodsFailure {
  type: typeof statisticsActions.GET_MOODS_FAILURE;
  payload: Error;
}

export type StatisticsActionsTypes =
  | GetHistory
  | GetHistorySuccess
  | GetHistoryFailure
  | GetMoods
  | GetMoodsSuccess
  | GetMoodsFailure;
