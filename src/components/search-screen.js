import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import jobService from "../services/movie-service"

const SearchScreen = () => {
    const history = useHistory()
    const {title} = useParams()
    const [searchTitle, setSearchTitle] = useState(title)
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
    return(
        <div>
            <h2>Search Screen</h2>
            <div className="row">
                <div className="col-9">
                    <input value={searchTitle}
                           onChange={(event) => {
                               setSearchTitle(event.target.value)
                           }}
                           className="form-control"/>
                </div>
                <div className="col-3">
                    <button
                        onClick={() => {
                            findJobsByTitle(searchTitle)
                        }}
                        className="btn btn-primary btn-block">
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