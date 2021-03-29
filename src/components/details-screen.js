import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import jobService from '../services/job-service'

const isValidHttpUrl = (string) => {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

const DetailsScreen = () => {
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
            <a href={`${job.company_url}`} target="_blank" rel = "noopener noreferrer">{job.company_url}</a>}
            {/*<div className='row'>*/}
            {/*    <div className = 'col-2'>*/}
            {/*        */}
            {/*    </div>*/}
            {/*    <div className = 'col-3'>*/}
            {/*        */}
            {/*    </div>*/}
            {/*</div>*/}
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
        </div>
    )
}

export default DetailsScreen