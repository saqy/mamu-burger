//allow us to listen to certain actions and do something when they occur
import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { logoutSaga, checkAuthTimeoutSaga } from "./auth";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}
