import { combineReducers } from "redux";
import { History } from "history";
import { IRegisterState, register } from "./register";
import { ILoginState, login } from "./login";
import { routerReducer, RouterState } from "react-router-redux"

export interface RootState {
	register: IRegisterState,
	login: ILoginState,
	routerReducer: RouterState,
}

const rootReducer = (history: History) => combineReducers({
  register: register,
  login: login,
  routerReducer,
});

export default rootReducer;
