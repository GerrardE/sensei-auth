import registerConstants from "./register.constants";
import * as registerInterfaces from "./register.interfaces";

const registerLoading = (data: boolean): registerInterfaces.IRegisterLoading => ({
  type: registerConstants.REGISTER_LOADING,
  payload: data,
});

const registerStart = (data: registerInterfaces.IRegistrationFormData): registerInterfaces.IRegisterStart => ({
  type: registerConstants.REGISTER_START,
  payload: data,
});

const registerModalStart = (data: boolean): registerInterfaces.IRegisterModalStart => ({
  type: registerConstants.REGISTER_MODAL_START,
  payload: data,
});

const registerModalToggle = (data: boolean): registerInterfaces.IRegisterModalToggle => ({
  type: registerConstants.REGISTER_MODAL_TOGGLE,
  payload: data,
});

const registerModalStop = (data: boolean): registerInterfaces.IRegisterModalStop => ({
  type: registerConstants.REGISTER_MODAL_STOP,
  payload: data,
});

const registerSuccess = (data: registerInterfaces.IRegisterData): registerInterfaces.IRegisterSuccess => ({
  type: registerConstants.REGISTER_SUCCESS,
  payload: data,
});

const registerFail = (data: registerInterfaces.IRegisterError): registerInterfaces.IRegisterFail => ({
  type: registerConstants.REGISTER_FAIL,
  payload: data,
});

export {
  registerLoading,
  registerStart,
  registerSuccess,
  registerFail,
  registerModalStart,
  registerModalToggle,
  registerModalStop
};
