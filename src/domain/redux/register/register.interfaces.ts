import { IRespError, IRespSuccess } from "../base.interface";
import registerConstants from "./register.constants";

export interface IRegistrationFormData {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

export interface IRegisterData {
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

export interface IRegisterError {
  errors: any,
  message: string,
}

export interface IRegisterState {
  register: IRespSuccess,
  errors: IRespError,
  loading: boolean,
  modalOpen: boolean,
}

interface IRegisterStart {
  type: typeof registerConstants.REGISTER_START,
  payload: IRegistrationFormData
}

interface IRegisterLoading {
  type: typeof registerConstants.REGISTER_LOADING,
  payload: boolean,
}

interface IRegisterModalStart {
  type: typeof registerConstants.REGISTER_MODAL_START,
  payload: boolean,
}

interface IRegisterModalToggle {
  type: typeof registerConstants.REGISTER_MODAL_TOGGLE,
  payload: boolean,
}

interface IRegisterModalStop {
  type: typeof registerConstants.REGISTER_MODAL_STOP,
  payload: boolean,
}

interface IRegisterSuccess {
  type: typeof registerConstants.REGISTER_SUCCESS,
  payload: IRegisterData,
}

interface IRegisterFail {
  type: typeof registerConstants.REGISTER_FAIL,
  payload: IRegisterError,
}

export type { IRegisterStart, IRegisterLoading, IRegisterModalStart, IRegisterModalToggle, IRegisterModalStop, IRegisterSuccess, IRegisterFail }
