import { SagaIterator } from '@redux-saga/core';
import ApiService from "@infrastructure/services/api.service";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as registerActions from "./register.actions";
import registerConstants from "./register.constants";
import * as registerInterfaces from "./register.interfaces";

// HANDLE MODAL
export function* registerModalStart(): SagaIterator {
  yield takeLatest(registerConstants.REGISTER_MODAL_START, registerModalToggle);
}

export function* registerModalStop(): SagaIterator {
  yield takeLatest(registerConstants.REGISTER_MODAL_STOP, registerModalToggle);
}

export function* registerModalToggle({ payload }: registerInterfaces.IRegisterModalToggle): SagaIterator {
  yield put(registerActions.registerModalToggle(payload))
}

// HANDLE REGISTRATION
export function* registerStart(): SagaIterator {
  yield takeLatest(registerConstants.REGISTER_START, registerStartAsync);
}

export function* registerStartAsync({ payload }: registerInterfaces.IRegisterStart): SagaIterator {
  try {
    yield put(registerActions.registerLoading(true));

    const { data } = yield call(ApiService.postResource, "auth/signup", payload);

    yield put(registerActions.registerSuccess(data));

    yield put(registerActions.registerLoading(false));
    
    yield put(registerActions.registerModalStart(true));
  } catch (error) {
    yield put(registerActions.registerLoading(false));

    const { response } = error

    yield put(registerActions.registerFail(response?.data));
  }
}

export default function* registerSagas(): SagaIterator {
  yield all([call(registerStart), call(registerModalStart), call(registerModalStop)]);
}
