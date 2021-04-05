import React from 'react'
import {Link} from "react-router-dom";

const ProfileScreen = () => {
    return (
        <div className="container">
            <h1 className="mb-3">Profile</h1>
            <form>
                <div className="form-group row">
                    <label className="col-sm-7 col-form-label">
                        <div className="alert alert-success" id="alertFld">Profile successfully saved</div>
                    </label>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" disabled="true" placeholder="Alice" id="usernameFld"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="phoneFld" className="col-sm-1 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" placeholder="(555) 123-4324" id="phoneFld"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="emailFld" className="col-sm-1 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="email" placeholder="alice@wonderland.com" id="emailFld"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                        Role
                    </label>
                    <div className="col-sm-6">
                        <select className="custom-select" id="roleFld">
                            <option value="Faculty">Faculty</option>
                            <option value="Student">Student</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label">
                        Date of Birth
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" type="date" value="mm/dd/yyyy" id="dobFld"/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label"></label>
                    <div className="col-sm-6">
                        <a onClick = {() => alert('info update!')} className="btn btn-success col-12 mb-1" data-toggle="collapse">Update</a>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label"></label>
                    <div className="col-sm-6">
                        <Link to = "/" className="btn btn-danger col-12 mb-0" id="logoutBtn">
                            Logout
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileScreen;