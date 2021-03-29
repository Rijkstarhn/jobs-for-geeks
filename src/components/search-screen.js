import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import jobService from "../services/job-service"

const SearchScreen = () => {
    const history = useHistory()
    const {description, location} = useParams()
    const [searchDescription, setSearchDescription] = useState(description)
    const [searchLocation, setSearchLocation] = useState(location)
    const [isFullTime, setIsFullTime] = useState(false)
    const [results, setResults] = useState(undefined)
    useEffect(() => {
        setSearchDescription(description)
        setSearchLocation(location)
        setIsFullTime(false)
        findJobs(description, location)
    }, [])
    const findJobs = (description, location, isFullTime) => {
        if (description === undefined || description === "") {
            description = "+"
        }
        if (location === undefined || location === "") {
            location = "+"
        }
        history.push(`/search/${description}/${location}`)
        jobService.findJobs(description, location, isFullTime)
            .then((results) => {
                setResults(results)
            })
    }
    const handleSubmit = () => {
        findJobs(searchDescription, searchLocation, isFullTime);
    }
    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };
    return(
        <div>
            <br/>
            <h2>Search Screen</h2>
            <br/>
            <div className="row">
                <div className="col-4">
                    <h6>Job Description</h6>
                    <input value={searchDescription}
                           onChange={(event) => {
                               setSearchDescription(event.target.value)
                           }}
                           onKeyPress = {
                               handleKeypress
                           }
                           className="form-control"/>
                </div>
                <div className="col-4">
                    <h6>Location</h6>
                    <input value={searchLocation}
                           onChange={(event) => {
                               setSearchLocation(event.target.value)
                           }}
                           onKeyPress = {
                               handleKeypress
                           }
                           className="form-control"/>
                </div>
                <div className="col-2 relativePosition">
                    <label className = 'checkboxPosition'>Full Time Only
                        <input type="checkbox" className = 'checkboxMargin'
                               defaultChecked={false}
                               onClick={() => {setIsFullTime(true)}}
                        />
                    </label>
                </div>
                <div className="col-2 relativePosition">
                    <button
                        onClick={() => {
                            findJobs(searchDescription, searchLocation, isFullTime)
                        }}
                        className="btn btn-primary btn-block searchButton">
                        Search
                    </button>
                </div>
            </div>
            <br/>
            {
                results !== undefined &&
                <>
                    <ul className="list-group">
                        {
                            results.map((result) => {
                                return(
                                    <li className="list-group-item">
                                        <Link to={`/details/${result.id}`}>
                                            {result.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default SearchScreen