import userService from "../../services/user-service";
import jobService from "../../services/job-service"

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

export const deleteCandidate = (dispatch, user) => {
  dispatch({
    type: "DELETE_USER",
    payload:{
      userToDelete:user
    }
  })
}

export const createCandidate = (dispatch, uid, seekerId) => {
  userService.createSeekerForRecruiter(uid, seekerId)
      .then(user => {
        dispatch({
                   type: "CREATE_USER",
                   payload:{
                     user
                   }
                 })
      })
}

export const updateCandidate = (dispatch, job) => {
  dispatch({
    type: "UPDATE_JOB",
    payload:{
      jobToUpdate:job
    }
  })
}



const userActions = {
  update, findAllUsers, deleteCandidate, updateCandidate, createCandidate

}
export default userActions