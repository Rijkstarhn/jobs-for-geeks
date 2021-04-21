import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import loginActions from "../redux/actions/login-action";
import {LOGIN_STATE} from "../redux/storeConstants";
import banner from "../res/banner_teams.jpg";
import icon from "../res/icon.png";

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
            <h1 className="mb-3">
                <Link to="/">
                    <img src={icon} className="btn home-icon" alt="home_icon"/>
                </Link>
                Log in
                <Link
                    className="btn btn-outline-primary float-right loginButton" to="/register">
                    Sign Up
                </Link>
            </h1>
            <div className="row">
                <div className="col-12 col-sm-2">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                </div>
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
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10">
                    {status === LOGIN_STATE.INVALID_LOGIN && <div className="alert alert-danger">
                        Invalid username / password! Please try again.
                    </div>}
                    <a className="btn btn-success col-12 mb-1"
                       onClick={handleLogin}>
                        Log in
                    </a>
                    {/*<Link to="/register" className="btn btn-secondary buttonMargin">*/}
                    {/*    Sign up*/}
                    {/*</Link>*/}
                    {status === LOGIN_STATE.LOGGED_IN && <Redirect push
                                                                   to={`/profile/${user._id}`}/>
                    }
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
