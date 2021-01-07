import { all, call } from "redux-saga/effects";
import registerSagas from "./register/register.sagas";
import loginSagas from "./login/login.sagas";

export default function* index() {
  yield all([call(registerSagas), call(loginSagas)]);
}
