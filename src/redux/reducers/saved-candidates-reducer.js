const INITIAL_STATE = [];

export const savedCandidatesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "STORE_SAVED_CANDIDATES":
            return action.payload.users;
        case "CREATE_CANDIDATE":
            let tmp = [...state, action.payload.user]
            return tmp

        case "DELETE_CANDIDATE":

            let newUsers = state.filter(user => {
                                           if (user._id !== action.payload.userToDelete._id) {
                                               return true
                                           } else {
                                               return false
                                           }
                                       }
            )
            return newUsers

        case "UPDATE_CANDIDATES":
            let users = state.map(user => {
                                  if (user._id === action.payload.userToUpdate._id) {
                                      return action.payload.userToUpdate
                                  } else {
                                      return user
                                  }
                              }
            )
            return users

        default:
            return state;
    }
};
