const INITIAL_STATE = {
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "STORE_ALL_USERS":
      console.log("all users reducer")
      return action.payload.users
    default:
      return state;
  }
};
