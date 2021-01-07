import loginConstants from "./login.constants";
import * as loginInterfaces from "./login.interfaces";

const loginLoading = (data: boolean): loginInterfaces.ILoginLoading => ({
  type: loginConstants.LOGIN_LOADING,
  payload: data,
});

const loginStart = (data: loginInterfaces.ILoginFormData): loginInterfaces.ILoginStart => ({
  type: loginConstants.LOGIN_START,
  payload: data,
});

const loginModalStart = (data: boolean): loginInterfaces.ILoginModalStart => ({
  type: loginConstants.LOGIN_MODAL_START,
  payload: data,
});

const loginModalToggle = (data: boolean): loginInterfaces.ILoginModalToggle => ({
  type: loginConstants.LOGIN_MODAL_TOGGLE,
  payload: data,
});

const loginModalStop = (data: boolean): loginInterfaces.ILoginModalStop => ({
  type: loginConstants.LOGIN_MODAL_STOP,
  payload: data,
});

const loginSuccess = (data: loginInterfaces.ILoginData): loginInterfaces.ILoginSuccess => ({
  type: loginConstants.LOGIN_SUCCESS,
  payload: data,
});

const loginFail = (data: loginInterfaces.ILoginError): loginInterfaces.ILoginFail => ({
  type: loginConstants.LOGIN_FAIL,
  payload: data,
});

export {
  loginLoading,
  loginStart,
  loginSuccess,
  loginFail,
  loginModalStart,
  loginModalToggle,
  loginModalStop
};
