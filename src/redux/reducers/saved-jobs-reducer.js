const INITIAL_STATE = [];

export const savedJobsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "STORE_SAVED_JOBS":
      return action.payload.jobs;
    case "CREATE_JOB":
      let tmp = [...state, action.payload.job]
      return tmp

    case "DELETE_JOB":

      let newJobs = state.filter(job => {
            if (job._id !== action.payload.jobToDelete._id) {
              return true
            } else {
              return false
            }
          }
      )
      return newJobs

    case "UPDATE_JOB":
      let t = state.map(job => {
            if (job._id === action.payload.jobToUpdate._id) {
              return action.payload.jobToUpdate
            } else {
              return job
            }
          }
      )
      return t

    default:
      return state;
  }
};
