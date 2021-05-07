import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/rootReducers";
import rootSaga from "./sagas";
import reduxThunk from "redux-thunk";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, reduxThunk))
);
sagaMiddleware.run(rootSaga);

export default store;
