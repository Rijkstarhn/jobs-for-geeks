import React, {useState} from 'react'
import {Link} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
import loginActions from "../redux/actions/login-action";
// import {LOGIN_STATE} from "../redux/storeConstants";
import {connect} from "react-redux";
// import Redirect from "react-router-dom/es/Redirect";

const LoginScreen = ({
    user={},
    status,
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = () => {
        // let loginUser = {username: username, password:password}
        // login(loginUser)
        clearForm();
    };
    const clearForm = () => {
        setUsername("");
        setPassword("");
    };

    console.log("user", user)
    console.log("status", status)

    return (
        <div className="container">
            <h1 className="title mb-3">
                <Link to="/">
                    <i className="fas fa-home"/>
                </Link>
                Sign In
            </h1>
            <form>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label" htmlFor="username">
                        Username </label>
                    <div className="col-sm-6">
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
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label" htmlFor="password">
                        Password </label>
                    <div className="col-sm-6">
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
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label"></label>
                    <div className="col-sm-6">
                        {/*{status === LOGIN_STATE.INVALID_LOGIN && <div className="alert alert-danger">*/}
                        {/*    Invalid username / password! Please try again.*/}
                        {/*</div>}*/}
                        <button  className="btn btn-primary col-12 mb-3 wbdv-login" >
                            Sign in
                        </button>

                        {/*{status === LOGIN_STATE.LOGGED_IN && <Redirect to={`/profile/${user._id}`}/>*/}
                        {/*}*/}

                        <div className="row">
                            <div className="col-6">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="col-6">


                                <Link to = "/register" className="float-right">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

const stateToPropsMapper = (state) => {
    return {
        status: state.loginReducer,
        user: state.useReducer
    }
}

const dispatchPropsMapper = (dispatch) => ({
    login: (user) => loginActions.login(dispatch, user)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(LoginScreen)