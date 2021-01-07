import registerConstants from "./register.constants";
import * as registerInterfaces from "./register.interfaces";

const initialState: registerInterfaces.IRegisterState = {
  register: {},
  errors: {},
  loading: false,
  modalOpen: false,
};

const registerReducer = (
  state = initialState,
  action: any,
): registerInterfaces.IRegisterState => {
  switch (action.type) {
  case registerConstants.REGISTER_LOADING:
    return {
      ...state,
      loading: action.payload,
    };

  case registerConstants.REGISTER_SUCCESS:
    return {
      ...state,
      register: action.payload,
    };

  case registerConstants.REGISTER_FAIL:
    return {
      ...state,
      errors: action.payload,
    };

  case registerConstants.REGISTER_MODAL_TOGGLE:
    return {
      ...state,
      modalOpen: action.payload,
    };

  default:
    return state;
  }
};

export default registerReducer;
