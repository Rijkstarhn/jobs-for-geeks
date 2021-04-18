import userService from "../../services/user-service"

export const loginSuccress = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: {
    user,
  },
});
export const loginFail = () => ({
  type: "INVALID_LOGIN",
});

export const loginNetworkError = () => ({
  type: "LOGIN_NETWORK_ERROR",
});

export const logout = () => ({
  type: "LOGOUT",
});

export const login = (dispatch, user) => {
  userService.login(user)
  .then(user => {
        if (user) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
              user
            }
          })
        }else{
          dispatch({type: "INVALID_LOGIN"})
        }
      }
  )
}

const loginActions = {
  login

}
export default loginActions