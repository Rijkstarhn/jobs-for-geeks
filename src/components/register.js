import React, {useState} from "react";
import userService from "../services/user-service";
import {Link} from "react-router-dom";
import banner from "../res/banner_teams.jpg";
import icon from "../res/icon.png";

let editing = false;
const Register = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [role, setRole] = useState("JOB SEEKER")
    const [registerStatus, setRegisterStatus] = useState("")

    const handleSignUp = () => {
        editing = false;
        let registerInfo = {};
        registerInfo.username = userName;
        registerInfo.password = password;
        registerInfo.role = role;
        userService.register(registerInfo)
            .then(response => {
                console.log("response", response)
                //alert('ffffff')
                if (response) {
                    setRegisterStatus("success")
                } else {
                    setRegisterStatus("fail")
                }
            })

        clearForm()

    }
    const clearForm = () => {
        setUserName("");
        setPassword("");
        setVerifyPassword("");
    }

    return (
        <div className="container">
            <img src={banner} className="img-fluid" alt="signup_banner"/>
            <h1 className="mb-3">
                <Link to="/">
                    <img src={icon} className="btn home-icon" alt="home_icon"/>
                </Link>
                Sign Up
                <Link
                    className="btn btn-outline-primary float-right loginButton" to="/login">
                    Login
                </Link>
            </h1>
            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                    Username
                </label>
                <div className="col-sm-10">
                    <input className="form-control" id="usernameFld"
                           placeholder="Alice"
                           value={userName}
                           onChange={(e) => {
                               editing = true;
                               setUserName(e.target.value)
                               setRegisterStatus("")
                           }}/>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                    Password
                </label>
                <div className="col-sm-10">
                    <input className="form-control" id="passwordFld"
                           placeholder="123qwe#$%" type="password"
                           value={password}
                           onChange={(e) => {
                               editing = true;
                               setPassword(e.target.value)
                               setRegisterStatus("")
                           }}/>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                    Verify Password
                </label>
                <div className="col-sm-10">
                    <input className="form-control" id="verifyPasswordFld"
                           placeholder="123qwe#$%" type="password"
                           value={verifyPassword}
                           onChange={(e) => setVerifyPassword(e.target.value)}/>
                    {verifyPassword.length > 0 && password !== verifyPassword && (
                        <div className="alert alert-danger">
                            password and verified password don't match
                        </div>
                    )}
                </div>
            </div>

            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label" htmlFor="role-select">
                    Choose a role:
                </label>
                <div className="col-sm-10">
                    <select className="form-control form-select-lg mb-3"
                            aria-label=".form-select-lg example"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}>
                        <option value="JOB SEEKER">Job Seeker</option>
                        <option value="RECRUITER">Recruiter</option>
                    </select>
                </div>
            </div>

            <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label"/>
                <div className="col-sm-10 ">
                    <a className="btn btn-primary btn-block"
                       onClick={() => handleSignUp()}>Submit
                    </a>
                </div>
            </div>

            {registerStatus === "fail" && !editing && <div className="alert alert-danger">
                Username has already existed
            </div>}

            {registerStatus === "success" && !editing && <div className="alert alert-success">
                Register successfully! Please login
            </div>}

            {/*<div className="form-group row mb-3">*/}
            {/*    <label className="col-sm-2 col-form-label"/>*/}
            {/*    <div className="col-sm-6">*/}
            {/*        <Link to="/login">*/}
            {/*            Login*/}
            {/*        </Link>*/}
            {/*        <Link className="float-right" to="/">*/}
            {/*            Cancel*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )

}

export default Register