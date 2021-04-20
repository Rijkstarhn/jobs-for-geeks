import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import jobService from "../services/job-search-service"
import loginActions, {logout} from "../redux/actions/login-action";
import {connect} from "react-redux";
import {LOGIN_STATE} from "../redux/storeConstants";
import banner from "../res/banner_teams.jpg";
import icon from "../res/icon.png";

const SearchScreen = ({user={},
  status, logout}) => {
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

  console.log("user", user)
  console.log("status", status)
  return (
      <div>
          <img src={banner} className="img-fluid" alt="home_banner"/>
          <br/>
        <h2>
            <Link to="/">
                {/*<i className="fas fa-home"/>*/}
                <img src={icon} className="img-thumbnail" alt="home_icon"/>
            </Link>
          {status === LOGIN_STATE.LOGGED_OUT && <Link className="btn btn-outline-primary float-right" to="/login">
            Login
          </Link>}
          {status === LOGIN_STATE.LOGGED_OUT && <Link className="btn btn-outline-primary float-right" to="/register">
            Sign up
          </Link>}

          {status === LOGIN_STATE.LOGGED_IN&& <a className="btn btn-outline-primary float-right" to="/login" onClick={() => logout()}>
            Logout
          </a>}
            Search Screen
        </h2>
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
                   className="form-control"/>
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
                   className="form-control"/>
          </div>
          <div className="col-sm-2">
            <label className='col-form-label checkboxPosition'>Full Time Only
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
                className="btn btn-primary btn-block searchButton">
              Search
            </button>
          </div>
        </div>
        <br/>
        <div className="row">

          <div className="col-sm-3">
            <Link className="allUsers" to={`/userlist`}>
              View All Users
            </Link>
          </div>

          {status === LOGIN_STATE.LOGGED_IN && <div className="col-sm-3">

            <Link className="searchMenu" to={`/profile/${user._id}`}>
              My profile
            </Link>
          </div>}


          {status === LOGIN_STATE.LOGGED_IN && user.role === "JOB SEEKER" &&
          <div className="col-sm-3">
            <Link className="searchMenu" to={`/${user._id}/myjob`}>
              My Jobs
            </Link>
          </div>}

          {status === LOGIN_STATE.LOGGED_IN && user.role === "RECRUITER" && <div className="col-sm-3">
            <Link className="searchMenu" to={`/${user._id}/candidates`}>
              My Saved Candidates
            </Link>
          </div>}

        </div>


        <br/>
        <br/>
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