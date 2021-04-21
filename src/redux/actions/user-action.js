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
console.log("find all users is called")
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

export const createCandidate = (dispatch, user) => {
  dispatch({
    type: "CREATE_USER",
    payload:{
      user
    }
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

export const deleteJob = (dispatch, job) => {
  dispatch({
    type: "DELETE_JOB",
    payload:{
      jobToDelete:job
    }
  })
}

export const createJob = (dispatch, job) => {
  dispatch({
    type: "CREATE_JOB",
    payload:{
      job
    }
  })
}

export const updateJob = (dispatch, user) => {
  dispatch({
    type: "UPDATE_USER",
    payload:{
      userToUpdate:user
    }
  })
}


const userActions = {
  update, findAllUsers, deleteCandidate, updateCandidate, createCandidate, createJob, deleteJob, updateJob

}
export default userActions