const INITIAL_STATE = {
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload.user
    case "LOGOUT":
      return INITIAL_STATE;

    case "UPDATE":
      return action.payload.user
    default:
      return state;
  }
};
