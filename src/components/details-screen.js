import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import jobService from '../services/job-search-service'
import loginActions from "../redux/actions/login-action";
import {connect} from "react-redux";
import userActions from "../redux/actions/user-action";
import {LOGIN_STATE} from "../redux/storeConstants";
import jobActions from "../redux/actions/job-action";

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const DetailsScreen = ({user, create, status}) => {
  const {jobId} = useParams()
  const history = useHistory()
  const [job, setMovie] = useState({})
  const [jobDescription, setJobDescription] = useState({})
  useEffect(() => {
    findJobByID()
  }, [])

  const findJobByID = () => {
    jobService.findJobByID(jobId)
    .then((data) => {
      setMovie(data)
    })
  }
  const handleCreateJob = () => {
    let newJob = {
      ...job,
      createdTime: new Date()
    }
    console.log("newjob", newJob)

    create(user._id, newJob)
  }
  console.log("job", job)
  return (
      <div className='container-fluid containerMargin'>
        <h2>
          {job.title}
          <img className='float-right companyIcon' src={`${job.company_logo}`}
               width={150} height={150}/>
        </h2>

        <h6 className='inlineHeading'>{job.company}</h6>

        {isValidHttpUrl(job.company_url) &&
        <a href={`${job.company_url}`} target="_blank"
           rel="noopener noreferrer">{job.company_url}</a>}
        <br/>
        <h6 className='inlineHeading'>Location:</h6>
        {job.location}
        <br/>
        <br/>
        <h6 className='inlineHeading'>Job Description</h6>
        <div dangerouslySetInnerHTML={{__html: job.description}}/>
        <button className='btn btn-primary' onClick={() => {
          history.goBack()
        }}>Back
        </button>

        {user.role === "JOB SEEKER" && status === LOGIN_STATE.LOGGED_IN &&
        <button className="btn btn-primary float-end"
                onClick={() => handleCreateJob()}>Add to my job list</button>}
      </div>
  )
}
const stateToPropsMapper = (state) => {
  return {
    user: state.userReducer,
    status: state.loginReducer,
  }
}

const dispatchPropsMapper = (dispatch) => ({
  create: (uid, job) => jobActions.createJob(dispatch, uid, job)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(DetailsScreen)
