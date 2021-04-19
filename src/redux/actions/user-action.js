import userService from "../../services/user-service";
import {login, logout} from "./login-action";

export const update = (dispatch, uid, user) => {
  userService.updateUser(uid, user)
  .then(status => {
          dispatch({
            type: "UPDATE",
            payload: {
              user
            }
          })
      }
  )
}
export const findAllUsers = (dispatch) => {
  userService.findAllUsers().then(users => {

    dispatch({
      type:"STORE_ALL_USERS",
      payload: {
        users
      }
    })
  })
}
const userActions = {
  update, findAllUsers

}
export default userActions