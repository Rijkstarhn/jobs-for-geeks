import { LOGIN_STATE } from "../storeConstants";

const INITIAL_STATE = LOGIN_STATE.LOGGED_OUT;

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return LOGIN_STATE.LOGGED_IN;
    case "INVALID_LOGIN":
      return LOGIN_STATE.INVALID_LOGIN;
    case "LOGIN_NETWORK_ERROR":
      return LOGIN_STATE.NETWORK_ERROR;
    case "LOGOUT":
      return LOGIN_STATE.LOGGED_OUT;
    default:
      return state;
  }
};
