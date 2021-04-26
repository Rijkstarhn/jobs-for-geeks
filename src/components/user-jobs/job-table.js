import React, {useEffect, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import JobRow from "./job-row";
import jobService from "../../services/job-service";
import userActions from "../../redux/actions/user-action";
import {connect} from "react-redux";
import {savedJobsReducer} from "../../redux/reducers/saved-jobs-reducer";
import jobActions from "../../redux/actions/job-action";
import banner from "../../res/banner_teams.jpg";

const JobTable = ({user, jobs, findAllSavedJobs}) => {
  const history = useHistory()

  useEffect(() => {
    findAllSavedJobs(user._id)
  }, [])
  return (
      <div className="container">
          <img src={banner} className="img-fluid" alt="signup_banner"/>
          <h1>
          My jobs list
        </h1>
        <div className="job-table">
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
        <div className="col-sm-6">
          <Link
              className="btn btn-outline-primary backHomeBtn" to="/">
            Homepage
          </Link>
        </div>
      </div>
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
