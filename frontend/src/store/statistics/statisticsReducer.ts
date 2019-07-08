import {
  StatisticsState,
  StatisticsActionsTypes,
  statisticsActions
} from "./types";
import { Reducer } from "redux";

const initialState: StatisticsState = {
  events: {
    events: [],
    isFetching: false,
    error: ""
  }
};

export const statisticsReducer: Reducer<
  StatisticsState,
  StatisticsActionsTypes
> = (state = initialState, action) => {
  switch (action.type) {
    case statisticsActions.GET_HISTORY:
      return {
        ...state,
        events: {
          ...state.events,
          isFetching: true
        }
      };
    case statisticsActions.GET_HISTORY_SUCCESS:
      return {
        ...state,
        events: {
          ...state.events,
          isFetching: false,
          events: action.payload.events
        }
      };
    case statisticsActions.GET_HISTORY_FAILURE:
      return {
        ...state,
        events: {
          ...state.events,
          isFetching: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
