import React, {useEffect, useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import jobService from "../services/job-search-service"
import loginActions from "../redux/actions/login-action";
import {connect} from "react-redux";
import {LOGIN_STATE} from "../redux/storeConstants";
import banner from "../res/banner_teams.jpg";
import icon from "../res/icon.png";
import './search-screen.style.client.css';

const SearchScreen = ({
                          user = {},
                          status, logout
                      }) => {
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
        //findJobs(description, location)
        jobService.findAllJobs().then(results => {
            setResults(results)
        })
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

    console.log("user", user)
    console.log("status", status)
    return (
        <div>
            <img src={banner} className="img-fluid" alt="home_banner"/>
            <br/>
            <div className="row search-heading">
                <div className="col-sm-6">
                    <Link to="/">
                        {/*<i className="fas fa-home"/>*/}
                        <img src={icon} className="btn" alt="home_icon"/>
                    </Link>
                    <a> Search Screen
                    </a>
                </div>
                <div className="col-sm-6">
                    {status === LOGIN_STATE.LOGGED_OUT && <Link
                        className="btn btn-outline-primary float-right loginButton" to="/login">
                        Login
                    </Link>}
                    {status === LOGIN_STATE.LOGGED_OUT && <Link
                        className="btn btn-outline-primary float-right signUpButton" to="/register">
                        Sign up
                    </Link>}

                    {status === LOGIN_STATE.LOGGED_IN && <Link
                        className="btn btn-outline-primary float-right logoutButton" to="/login"
                        onClick={() => logout()}>
                        Logout
                    </Link>}

                    {status === LOGIN_STATE.LOGGED_IN && <Link
                        className="btn btn-outline-primary float-right myProfileButton"
                        to={`/profile/${user._id}`}>
                        My profile
                    </Link>}
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-4">
                    <h6>Job Description</h6>
                    <input value={searchDescription}
                           placeholder={'e.g. C'}
                           onChange={(event) => {
                               setSearchDescription(event.target.value)
                           }}
                           onKeyPress={
                               handleKeypress
                           }
                           className="form-control searchBar"/>
                </div>
                <div className="col-sm-4">
                    <h6>Location</h6>
                    <input value={searchLocation}
                           placeholder={'e.g. sf'}
                           onChange={(event) => {
                               setSearchLocation(event.target.value)
                           }}
                           onKeyPress={
                               handleKeypress
                           }
                           className="form-control searchBar"/>
                </div>
                <div className="col-sm-2">
                    <label className='col-form-label checkboxPosition'>
                        Full Time Only
                        <input type="checkbox" className='checkboxMargin'
                               defaultChecked={false}
                               onClick={() => {
                                   setIsFullTime(!isFullTime)
                               }}
                        />
                    </label>
                </div>
                <div className="col-sm-2">
                    <button
                        onClick={() => {
                            findJobs(searchDescription, searchLocation, isFullTime)
                        }}
                        className="btn btn-outline-primary searchButton">
                        {/*Search*/}
                        <i className="fas fa-search"/>
                    </button>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm-10">
                    {
                        results !== undefined &&
                        <>
                            <ul className="list-group">
                                {
                                    results.map((result) => {
                                        return (
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
                <div className="col-sm-2">
                    <div className="row">
                        <Link className="btn btn-outline-primary float-right viewAllUsers"
                              to={`/userlist`}>
                            View All Users
                        </Link>
                    </div>
                    <div className="row">
                        {status === LOGIN_STATE.LOGGED_IN && user.role === "JOB SEEKER" &&
                         <Link className="btn btn-outline-primary float-right searchMenu"
                               to={`/${user._id}/myjob`}>
                             My Jobs
                         </Link>}

                        {status === LOGIN_STATE.LOGGED_IN && user.role === "RECRUITER" &&
                         <Link className="btn btn-outline-primary float-right searchMenu"
                               to={`/${user._id}/candidates`}>
                             My Saved Candidates
                         </Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}
const stateToPropsMapper = (state) => {
    return {
        status: state.loginReducer,
        user: state.userReducer
    }
}

const dispatchPropsMapper = (dispatch) => ({
    logout: () => loginActions.logout(dispatch)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(SearchScreen)