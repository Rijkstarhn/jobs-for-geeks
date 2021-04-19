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

const userActions = {
  update

}
export default userActions