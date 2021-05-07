import { all } from "redux-saga/effects";

//public
import accountSaga from "./saga/registerSaga";
import loginSaga from "./saga/loginSaga";
import forgetSaga from "./saga/forgetSaga";
import LayoutSaga from "./saga/layoutSaga";

export default function* rootSaga() {
  yield all([
    //public
    accountSaga(),
    loginSaga(),
    forgetSaga(),
    LayoutSaga(),
  ]);
}
