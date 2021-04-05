import React from 'react'
import {Link} from "react-router-dom";

const LoginScreen = () => {
    return (
        <div className="container">
            <h1 className="title mb-3">Sign In</h1>
            <form>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label" htmlFor="username">
                        Username </label>
                    <div className="col-sm-6">
                        <input className="form-control"
                               id="username"
                               placeholder="Alice"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label" htmlFor="password">
                        Password </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="password"
                               placeholder="123qwe#$%" type="password"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label"></label>
                    <div className="col-sm-6">
                        <Link to = "/profile" className="btn btn-primary col-12 mb-3 wbdv-login">
                            Sign in
                        </Link>
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

export default LoginScreen;