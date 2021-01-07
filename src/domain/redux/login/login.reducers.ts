import loginConstants from "./login.constants";
import * as loginInterfaces from "./login.interfaces";

const initialState: loginInterfaces.ILoginState = {
  login: {},
  errors: {
    error: {
      message: ""
    }
  },
  loading: false,
  modalOpen: false,
};

const loginReducer = (
  state = initialState,
  action: any,
): loginInterfaces.ILoginState => {
  switch (action.type) {
  case loginConstants.LOGIN_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  case loginConstants.LOGIN_SUCCESS:
    return {
      ...state,
      login: action.payload,
    };

  case loginConstants.LOGIN_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  case loginConstants.LOGIN_MODAL_TOGGLE:
    return {
      ...state,
      modalOpen: action.payload,
    };

  default:
    return state;
  }
};

export default loginReducer;
