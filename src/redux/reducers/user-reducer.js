const INITIAL_STATE = {
  user:{}
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload.user
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};
