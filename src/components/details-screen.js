import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import jobService from '../services/job-search-service'
import {connect} from "react-redux";
import {LOGIN_STATE} from "../redux/storeConstants";
import jobActions from "../redux/actions/job-action";
import userService from "../services/user-service";

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

const DetailsScreen = ({user,status}) => {
  const {jobId} = useParams()
  const history = useHistory()
  const [job, setMovie] = useState({})
  const [error, setError] = useState(false);
  useEffect(() => {
    findJobByID()
    setError(false)
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

    //create(user._id, newJob)
    userService.createJobForUser(user._id, newJob).then(status => {
      console.log("add job status", status)
      if(status){
        setError(true)
      }else{
        setError(false)
      }
    })
  }
  console.log("job", job)
  return (
      <div className='container-fluid containerMargin'>
        <h2>
          {job.title}
          <img className='float-end companyIcon' src={`${job.company_logo}`}
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

        <div className="row">
          <div className="col-sm-6">
              <button className='btn btn-outline-primary' onClick={() => {
                  history.goBack()
              }}>Back to My Job Lists
              </button>
          </div>
            <div className="col-sm-6">
                {user.role === "JOB SEEKER" && status === LOGIN_STATE.LOGGED_IN &&
                 <button type="button" className="btn btn-outline-primary float-end"
                         data-bs-toggle="modal"
                         data-bs-target="#exampleModal" onClick={() => handleCreateJob()}>
                     Add to my job list modal
                 </button>
                }
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                {!error && "You have successfully added this job to your saved job list!"}
                {error && "This job has already existed in your saved job list!"}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

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
  //create: (uid, job) => jobActions.createJob(dispatch, uid, job)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(DetailsScreen)
