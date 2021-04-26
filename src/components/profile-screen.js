import React, {useState} from 'react'
import {Link, useHistory, useParams} from "react-router-dom";
import loginActions from "../redux/actions/login-action";
import {connect} from "react-redux";
import userActions from "../redux/actions/user-action";
import icon from "../res/icon.png";
import profileBanner from "../res/banner_solo.jpg";
import banner from "../res/banner_teams.jpg";

const ProfileScreen = ({logout, user, updateUser}) => {
    const {userId} = useParams()

    const [cachedItem, setCashedItem] = useState(user)
    const [password, setPassword] = useState(user.password)
    const [update, setUpdate] = useState(false)
    const history = useHistory()

    const handleUpdate = () => {
        setUpdate(true)
        updateUser(userId, cachedItem)
    }

    // useEffect(() => {
    //   setUpdate(false)
    // }, [user])
    return (
        <div className="container">
            <img src={profileBanner} className="img-fluid" alt="signup_banner"/>
            <h1 className="mb-3">
                <Link to="/">
                    <img src={icon} className="btn home-icon" alt="home_icon"/>
                </Link>
                Profile
            </h1>
            <form>
                {update && <div className="form-group row">
                    <label className="col-sm-12 col-form-label">
                        <div className="alert alert-success"
                             id="alertFld">Profile successfully saved
                        </div>
                    </label>
                </div>}

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Username
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control" id="usernameFld"
                               disabled={true}
                               value={cachedItem.username}/>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
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
                    <div className="col-sm-10">
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
                    <div className="col-sm-10">
                        <input className="form-control" id="firstname"
                               type="text"
                               value={cachedItem.firstname}

                               placeholder="John"
                               />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label">
                        Last Name
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control" id="lastname"
                               value={cachedItem.lastname}
                               placeholder="Doe"
                               />

                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="exampleInputEmail1"
                           className="form-label col-sm-2 ">
                        Address
                    </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control"
                               id="exampleInputEmail1" aria-describedby="emailHelp"
                               value={cachedItem.email}
                               placeholder="johndoe@example.com"
                               onChange={(e) => setCashedItem(
                                   {...cachedItem, email: e.target.value})}/>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="form-label col-sm-2 " htmlFor="phone">Phone
                        number
                    </label>
                    <div className="col-sm-10">
                        <input className="form-control" type="tel" id="phone" name="phone"
                               value={cachedItem.phone}
                               placeholder="123-456-7890"
                               onChange={(e) => setCashedItem(
                                   {...cachedItem, phone: e.target.value})}/>
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label" htmlFor="role-select">
                        Choose a role
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control form-select-lg mb-3"
                                aria-label=".form-select-lg example"
                                value={cachedItem.role}
                                disabled={true}>
                            <option value="JOB SEEKER">Job Seeker</option>
                            <option value="RECRUITER">Recruiter</option>
                        </select>
                    </div>
                </div>

                {cachedItem.role === "JOB SEEKER" && (
                    <>
                        <div className="form-group row mb-3">
                            <label className="col-sm-2 col-form-label">
                                Education
                            </label>
                            <div className="col-sm-6">
                                <input className="form-control" id="education"
                                       value={cachedItem.education}
                                       placeholder="Northeastern University"
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

                                       placeholder="Node.js, react"
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
                              placeholder="AWS certified Cloud Practitioner"
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
                              placeholder="I have ..."

                              value={cachedItem.experience}
                              placeholder="I have ..."
                              onChange={(e) => setCashedItem(
                                  {
                                      ...cachedItem,
                                      experience: e.target.value
                                  })}/>
                            </div>
                        </div>
                    </>

                )}

                {cachedItem.role === "RECRUITER" && (

                    <div className="form-group row mb-3">
                        <label className="col-sm-2 col-form-label">
                            Company
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="company"
                                   value={cachedItem.company}
                                   placeholder="Tesla, Inc"
                    onChange={(e) => setCashedItem(
                                       {...cachedItem, company: e.target.value})}/>
                        </div>
                    </div>
                )}

                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <a onClick={() => handleUpdate()}
                           className="btn btn-success col-12 mb-1"
                           data-toggle="collapse">Update</a>
                    </div>
                </div>

            </form>
            <br/>
            <br/>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        user: state.userReducer,
    }
}
const dispatchPropsMapper = (dispatch) => ({
    logout: () => loginActions.logout(dispatch),
    updateUser: (uid, user) => userActions.update(dispatch, uid, user)

})

export default connect(stateToPropsMapper, dispatchPropsMapper)(ProfileScreen)
