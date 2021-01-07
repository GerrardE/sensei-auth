import { SagaIterator } from '@redux-saga/core';
import ApiService from "@infrastructure/services/api.service";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as loginActions from "./login.actions";
import loginConstants from "./login.constants";
import * as loginInterfaces from "./login.interfaces";

// HANDLE MODAL
export function* loginModalStart(): SagaIterator {
  yield takeLatest(loginConstants.LOGIN_MODAL_START, loginModalToggle);
}

export function* loginModalStop(): SagaIterator {
  yield takeLatest(loginConstants.LOGIN_MODAL_STOP, loginModalToggle);
}

export function* loginModalToggle({ payload }: loginInterfaces.ILoginModalToggle): SagaIterator {
  yield put(loginActions.loginModalToggle(payload))
}

// HANDLE LOGIN
export function* loginStart(): SagaIterator {
  yield takeLatest(loginConstants.LOGIN_START, loginStartAsync);
}

export function* loginStartAsync({ payload }: loginInterfaces.ILoginStart): SagaIterator {
  try {
    yield put(loginActions.loginLoading(true));

    const { data } = yield call(ApiService.postResource, "auth/login", payload);

    yield put(loginActions.loginSuccess(data));

    yield put(loginActions.loginLoading(false));
  } catch (error) {
    yield put(loginActions.loginLoading(false));
    
    const { response } = error
    
    yield put(loginActions.loginFail(response?.data));

    if(response?.data?.status == 401){
      yield put(loginActions.loginModalStart(true));
    }
  }
}

export default function* loginSagas(): SagaIterator {
  yield all([call(loginStart), call(loginModalStart), call(loginModalStop)]);
}
