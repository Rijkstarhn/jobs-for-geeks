import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import loginActions from "../redux/actions/login-action";
import {LOGIN_STATE} from "../redux/storeConstants";
import {connect} from "react-redux";

const Login = ({login, status, user}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let loginUser = {username: username, password:password}
    login(loginUser)
    clearForm();
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
  };

  console.log("user", user)
  console.log("status", status)
  return (
      <>

        <div className="row my-4 add-form">
          <div className="col-12 col-sm-2">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
          </div>
          <div className="col">
            <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
            />
          </div>
        </div>
        <div className="row my-4 add-form">
          <div className="col-12 col-sm-2">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
          </div>
          <div className="col">
            <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            {status === LOGIN_STATE.INVALID_LOGIN && <div className="alert alert-danger">
                Invalid username / password! Please try again.
            </div>}
            <button className="btn btn-secondary float-end" onClick={handleLogin}>
              Log in
            </button>
            <Link to = "/register" className="btn btn-secondary buttonMargin">
                Sign up
            </Link>
            {status === LOGIN_STATE.LOGGED_IN && <Redirect push to={`/profile/${user._id}`}/>
            }
          </div>
        </div>
      </>
  );
};

const stateToPropsMapper = (state) => {
  return {
    status: state.loginReducer,
    user: state.userReducer
  }
}

const dispatchPropsMapper = (dispatch) => ({
  login: (user) => loginActions.login(dispatch, user)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(Login)
