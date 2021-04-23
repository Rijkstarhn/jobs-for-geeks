import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import JobRow from "./job-row";
import jobService from "../../services/job-service";
import userActions from "../../redux/actions/user-action";
import {connect} from "react-redux";
import {savedJobsReducer} from "../../redux/reducers/saved-jobs-reducer";
import jobActions from "../../redux/actions/job-action";

const JobTable = ({user, jobs, findAllSavedJobs}) => {
  const history = useHistory()

  useEffect(() => {
    findAllSavedJobs(user._id)
  }, [])
  return (
      <>
        <h1>
          <div onClick={() => history.goBack()}
               className="btn btn-primary">
            <i className="fas fa-arrow-left fa-2x"/>
          </div>
          My job list
        </h1>
        <div className="container dy-table">
          <table className="table">
            <tbody>
            <tr>
              <th className="d-none d-md-table-cell">Job Title</th>
              <th className="d-none d-lg-table-cell">Note</th>
              <th></th>

            </tr>

            {
              jobs.map((job, ndx) =>
                  <JobRow job={job}/>
              )
            }

            </tbody>
          </table>
        </div>
      </>
  )

}

const stateToPropsMapper = (state) => {
  return {
    user: state.userReducer,
    jobs: state.savedJobsReducer
  }
}

const dispatchPropsMapper = (dispatch) => ({
  findAllSavedJobs: (uid) => jobActions.getSavedJobsForUser(dispatch, uid)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(JobTable)
