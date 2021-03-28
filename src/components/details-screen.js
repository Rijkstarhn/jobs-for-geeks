import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from 'react-router-dom'
import movieService from '../services/movie-service'

const DetailsScreen = () => {
    const {jobId} = useParams()
    const history = useHistory()
    const [job, setMovie] = useState({})
    const [jobDescription, setJobDescription] = useState({})
    useEffect(() => {
        findJobByID()
    }, [])
    const findJobByID = () => {
        movieService.findJobByID(jobId)
            .then((data) => {
                setMovie(data)

            })
    }
    return(
        <div className='container-fluid containerMargin'>
            <h2>
                {job.title}
                <img className='float-right companyIcon' src={`${job.company_logo}`} width = {150} height={150}/>
            </h2>

            <h6>{job.company}</h6>
            <a href = {`${job.company_url}`}>{job.company_url}</a>
            {/*<div className='row'>*/}
            {/*    <div className = 'col-2'>*/}
            {/*        */}
            {/*    </div>*/}
            {/*    <div className = 'col-3'>*/}
            {/*        */}
            {/*    </div>*/}
            {/*</div>*/}
            <br/>
            <h6>Location:</h6>
            {job.location}
            <br/>
            <br/>
            <h6>Job Description</h6>
            <div dangerouslySetInnerHTML={{__html: job.description}} />
            <button className='btn btn-primary' onClick={()=>{history.goBack()}}>Back</button>
        </div>
    )
}

export default DetailsScreen