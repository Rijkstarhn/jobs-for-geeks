import React from 'react';
import {Link} from "react-router-dom";

const RegisterScreen = () => {
    return (
        <div className="container">
            <h1 className="mb-3">Sign Up</h1>
            <form>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="usernameFld" placeholder="Alice" />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="passwordFld" placeholder="123qwe#$%" type="password" />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                        Verify Password
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="verifyPasswordFld" placeholder="123qwe#$%" type="password" />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                    </label>
                    <div className="col-sm-6">
                        <Link to = "/profile" className="btn btn-primary btn-block" id="registerBtn" >
                            Sign up
                        </Link>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                    </label>
                    <div className="col-sm-6">
                        <Link to = "/login" >
                            Login
                        </Link>
                        <Link className="float-right" to="/">
                            Cancel
                        </Link>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default RegisterScreen;