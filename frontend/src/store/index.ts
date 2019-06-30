import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import * as history from "history";
import { rootReducer } from "@App/store/reducers";
import initSaga from "@App/store/sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (arg: StoreEnhancer) => undefined;
  }
}

const sagaMiddleware = createSagaMiddleware();
export const webHistory = history.createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(initSaga);

export default store;
