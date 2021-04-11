import React, {useState} from 'react'
import {Link} from "react-router-dom";

const user = {
    username: "Alice",
    password: "123",
    firstname: "ddd",
    lastname: "",
    role: "recruiter",
    email: "dddd@gmail.com",
    phone: "1234557",
    company: "",
    skills: "",
    education: "",
    experience: "",
    license: "",
}

const ProfileScreen = () => {

    const [cachedItem, setCashedItem] = useState(user)
    const [password, setPassword] = useState(user.password)
    const [update, setUpdate] = useState(false)

    const handleUpdate = () => {
        setUpdate(true)
    }
    return (
        <div className="container">
            <h1 className="mb-3">Profile</h1>
            <form>
                {update && <div className="form-group row">
                    <label className="col-sm-7 col-form-label">
                        <div className="alert alert-success"
                             id="alertFld">Profile successfully saved
                        </div>
                    </label>
                </div>}


                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="usernameFld"
                               disabled={true}
                               value={cachedItem.username}
                              />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="passwordFld"
                               placeholder={cachedItem.password} type="password"
                               value={cachedItem.password}
                               onChange={(e) => setCashedItem(
                                   {...cachedItem, password: e.target.value})}/>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Verify Password
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="verifyPasswordFld"
                               placeholder="123qwe#$%" type="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        {password.length > 0 && password !== cachedItem.password && (
                            <div className="alert alert-danger">
                                password and verified password don't match
                            </div>
                        )}
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        First Name
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="firstname"
                               type="text"
                               value={cachedItem.firstname}
                              disabled={true}
                        />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-6">
                        <input className="form-control" id="lastname"
                               value={cachedItem.lastname}
                               disabled={true}

                        />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label col-sm-2 ">
                        Address</label>
                    <div className="col-sm-6">
                        <input type="email" className="form-control"
                               id="exampleInputEmail1" aria-describedby="emailHelp"
                               value={cachedItem.email}
                               onChange={(e) => setCashedItem(
                                   {...cachedItem, email: e.target.value})}/>
                    </div>
                </div>


                <div className="form-group row mb-3">
                    <label className="form-label col-sm-2 " htmlFor="phone">Phone number:</label>

                    <div className="col-sm-6">
                        <input className="form-control" type="tel" id="phone" name="phone"
                               value={cachedItem.phone}
                               onChange={(e) => setCashedItem(
                                   {...cachedItem, phone: e.target.value})}/>
                    </div>
                </div>


                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="role-select">
                        Choose a role:
                    </label>
                    <div className="col-sm-6">
                        <select className="form-control form-select-lg mb-3"
                                aria-label=".form-select-lg example"
                                value={cachedItem.role}
                                disabled={true}>

                            <option value="job-seeker">Job Seeker</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                    </div>
                </div>

                {cachedItem.role === "job-seeker" && (
                    <>
                        <div className="form-group row mb-3">
                            <label className="col-sm-2 col-form-label">
                                Education
                            </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="education"
                                       value={cachedItem.education}
                                       onChange={(e) => setCashedItem(
                                           {...cachedItem, education: e.target.value})}/>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label className="col-sm-2 col-form-label">
                                Skills
                            </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="skills"
                                       value={cachedItem.skills}
                                       onChange={(e) => setCashedItem(
                                           {...cachedItem, skills: e.target.value})}/>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label className="col-sm-2 col-form-label">
                                License & Certifications
                            </label>
                            <div className="col-sm-6">
                    <textarea className="form-control" id="license"
                              value={cachedItem.license}
                              onChange={(e) => setCashedItem(
                                  {...cachedItem, license: e.target.value})}/>
                            </div>
                        </div>



                        <div className="form-group row mb-3">
                            <label className="col-sm-2 col-form-label">
                                Experience
                            </label>
                            <div className="col-sm-6">
                    <textarea className="form-control" id="experience"

                              value={cachedItem.experience}
                              onChange={(e) => setCashedItem(
                                  {...cachedItem, experience: e.target.value})}/>
                            </div>
                        </div>
                    </>

                )}

                {cachedItem.role === "recruiter" && (

                    <div className="form-group row mb-3">
                        <label className="col-sm-2 col-form-label">
                            Company
                        </label>
                        <div className="col-sm-6">
                            <input className="form-control" id="company"
                                   value={cachedItem.company}
                                   onChange={(e) => setCashedItem(
                                       {...cachedItem, company: e.target.value})}/>
                        </div>
                    </div>

                )}




                <div className="form-group row mb-3">
                    <label className="col-sm-1 col-form-label"></label>
                    <div className="col-sm-6">
                        <a onClick = {() => handleUpdate()} className="btn btn-success col-12 mb-1" data-toggle="collapse">Update</a>
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