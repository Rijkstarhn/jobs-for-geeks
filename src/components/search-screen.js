import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import jobService from "../services/job-service"

const SearchScreen = () => {
    const history = useHistory()
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
    const [searchLocation, setSearchLocation] = useState('')
    const [results, setResults] = useState(undefined)
    useEffect(() => {
        setSearchTitle(title)
        findJobsByTitle(title)
    }, [])
    const findJobsByTitle = (title) => {
        history.push(`/search/${title}`)
        jobService.findJobsByTitle(title)
            .then((results) => {
                setResults(results)
            })
    }
    const handleSubmit = () => {
        findJobsByTitle(searchTitle);
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
                        <input value={searchTitle}
                               onChange={(event) => {
                                   setSearchTitle(event.target.value)
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
                        <input type="checkbox" className = 'checkboxMargin'/>
                    </label>
                </div>
                <div className="col-2 relativePosition">
                    <button
                        onClick={() => {
                            findJobsByTitle(searchTitle)
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