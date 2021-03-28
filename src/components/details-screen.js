import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import movieService from '../services/movie-service'

const DetailsScreen = () => {
    const {jobId} = useParams()
    const history = useHistory()
    const [job, setMovie] = useState({})
    const [jobDescription, setJobDescription] = useState({})
    useEffect(() => {
        findMovieByImdbID()
    }, [])
    const findMovieByImdbID = () => {
        movieService.findMovieByImdbID(jobId)
            .then((data) => {
                setMovie(data)

            })
    }
    return(
        <div>
            <button onClick={()=>{history.goBack()}}>Back</button>
            <h2>{job.title}</h2>
            <div dangerouslySetInnerHTML={{__html: job.description}} />;
        </div>
    )
}

export default DetailsScreen