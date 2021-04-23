import userService from "../../services/user-service";
import jobService from "../../services/job-service";
import {login, logout} from "./login-action";

export const deleteJob = (dispatch, jid, job) => {
  jobService.deleteJob(jid).then(status => dispatch({
    type: "DELETE_JOB",
    payload:{
      jobToDelete:job
    }
  })
  )
}

export const createJob = (dispatch, uid, job) => {

  userService.createJobForUser(uid, job).then(status => {
        console.log(status)
      }
  )
}

export const updateJob = (dispatch, jid, job) => {
  jobService.updateJob(jid, job).then(status => console.log(status))
  dispatch({
    type: "UPDATE_JOB",
    payload:{
      jobToUpdate:job
    }
  })
}

export const getSavedJobsForUser = (dispatch, uid) => {
  userService.findAllUsersSavedJobs(uid).then((jobs) => dispatch({
    type:"STORE_SAVED_JOBS",
    payload:{
      jobs
    }
  }))
}

const jobActions = {
  getSavedJobsForUser, createJob, updateJob, deleteJob

}
export default jobActions