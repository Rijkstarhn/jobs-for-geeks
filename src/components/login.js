import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import loginActions from "../redux/actions/login-action";
import {LOGIN_STATE} from "../redux/storeConstants";
import banner from "../res/banner_teams.jpg";

const Login = ({login, status, user}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        let loginUser = {username: username, password: password}
        login(loginUser)
        clearForm();
    };

    const clearForm = () => {
        setUsername("");
        setPassword("");
    };

    return (
        <div className="container">
            <img src={banner} className="img-fluid" alt="signup_banner"/>
            <div className="row">
                <h1>
                    Log in
                    <Link
                        className="btn btn-outline-primary float-end signUpButton" to="/register">
                        Sign Up
                    </Link>
                </h1>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label"
                       htmlFor="username">
                    Username
                </label>

                <div className="col-sm-10">
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
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label"
                       htmlFor="password">
                    Password
                </label>
                <div className="col-sm-10">
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
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    {status === LOGIN_STATE.INVALID_LOGIN && <div className="alert alert-danger">
                        Invalid username or password! Please try again.
                    </div>}
                    <button className="btn btn-outline-primary col-12"
                            onClick={handleLogin}>
                        Log in
                    </button>
                    {status === LOGIN_STATE.LOGGED_IN && <Redirect push
                                                                   to={`/profile/${user._id}`}/>
                    }
                </div>
            </div>
            <div className="row">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    <Link
                        className="btn btn-outline-primary col-12" to="/">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
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
