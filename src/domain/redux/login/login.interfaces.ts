import { IRespError, IRespSuccess } from "../base.interface";
import loginConstants from "./login.constants";

export interface ILoginFormData {
  email: string,
  password: string,
}

export interface ILoginData {
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  token: string,
  company: [
    {
      name: string,
      role: string,
      industry: string,
      startDate: string,
      endDate: string,
    }
  ],
  school: [
    {
      name: string,
      course: string,
      level: string,
      graduationYear: string,
    }
  ],
  skills: [
    {
      name: string,
      id: string,
    }
  ],
  interests: [
    {
      name: string,
      id: string,
    }
  ],
  focusAreas: [
    {
      name: string,
      id: string,
    }
  ],
  profile: {
    id: string,
    userId: string,
    userType: string,
    lat: string,
    long: string,
    country: string,
    city: string,
    dob: string,
  },
}

export interface ILoginError {
  error: any,
}

export interface ILoginState {
  login: IRespSuccess,
  errors: IRespError,
  loading: boolean,
  modalOpen: boolean,
}

interface ILoginStart {
  type: typeof loginConstants.LOGIN_START,
  payload: ILoginFormData
}

interface ILoginLoading {
  type: typeof loginConstants.LOGIN_LOADING,
  payload: boolean,
}

interface ILoginModalStart {
  type: typeof loginConstants.LOGIN_MODAL_START,
  payload: boolean,
}

interface ILoginModalToggle {
  type: typeof loginConstants.LOGIN_MODAL_TOGGLE,
  payload: boolean,
}

interface ILoginModalStop {
  type: typeof loginConstants.LOGIN_MODAL_STOP,
  payload: boolean,
}

interface ILoginSuccess {
  type: typeof loginConstants.LOGIN_SUCCESS,
  payload: ILoginData,
}

interface ILoginFail {
  type: typeof loginConstants.LOGIN_FAIL,
  payload: ILoginError,
}

export type { ILoginStart, ILoginLoading, ILoginModalStart, ILoginModalToggle, ILoginModalStop, ILoginSuccess, ILoginFail }
