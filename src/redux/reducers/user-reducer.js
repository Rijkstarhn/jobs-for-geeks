const INITIAL_STATE = {}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return action.payload.user
    case "LOGOUT":
      return INITIAL_STATE;

    case "UPDATE":
      return action.payload.user

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(user => {
              if (user._id !== action.userToDelete._id) {
                return true
              } else {
                return false
              }
            }
        )
      }

    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map(user => {
              if (user._id !== action.userToUpdate._id) {
                return action.userToUpdate
              } else {
                return user
              }
            }
        )
      }
    default:
      return state;
  }
};
