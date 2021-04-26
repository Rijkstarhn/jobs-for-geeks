import React, {useState} from 'react'
import {Link, useHistory, useLocation} from "react-router-dom";
import userActions from "../../redux/actions/user-action";
import {connect} from "react-redux";
import {LOGIN_STATE} from "../../redux/storeConstants";

const UserDetail = ({currentUser, create, status}) => {
  const location = useLocation();

  const [type, setType] = useState("interested")
    const history = useHistory()
  const user = location.state.user

  console.log("user", user)
  return (
      <div className="container">
        <h1 className="mb-3">
            <div onClick={() => history.goBack()}
                 className="btn btn-primary">
                <i className="fas fa-arrow-left fa-2x"/>
            </div>
            User Detail
        </h1>


        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-6">
            <input className="form-control" id="usernameFld"
                   disabled={true}
                   value={user.username}
            />
          </div>
        </div>


        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-6">
            <input className="form-control" id="firstname"
                   type="text"
                   value={user.firstname}
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
                   value={user.lastname}
                   disabled={true}

            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <label htmlFor="exampleInputEmail1"
                 className="form-label col-sm-2 ">
            Address</label>
          <div className="col-sm-6">
            <input type="email" className="form-control"
                   id="exampleInputEmail1" aria-describedby="emailHelp"
                   value={user.email}
                   disabled={true}
            />
          </div>
        </div>


        <div className="form-group row mb-3">
          <label className="form-label col-sm-2 " htmlFor="phone">Phone
            number:</label>

          <div className="col-sm-6">
            <input className="form-control" type="tel" id="phone" name="phone"
                   value={user.phone}
                   disabled={true}
            />
          </div>
        </div>


        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="role-select">
            Role:
          </label>
          <div className="col-sm-6">
            <input className="form-control" id="education"
                   value={user.role}
                   disabled={true}
            />
          </div>
        </div>

        {user.role === "JOB SEEKER" && (
            <>
              <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                  Education
                </label>
                <div className="col-sm-6">
                  <input className="form-control" id="education"
                         value={user.education}
                         disabled={true}
                  />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                  Skills
                </label>
                <div className="col-sm-6">
                  <input className="form-control" id="skills"
                         value={user.skills}
                         disabled={true}
                  />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                  License & Certifications
                </label>
                <div className="col-sm-6">
                    <textarea className="form-control" id="license"
                              value={user.license}
                              disabled={true}
                    />
                </div>
              </div>


              <div className="form-group row mb-3">
                <label className="col-sm-2 col-form-label">
                  Experience
                </label>
                <div className="col-sm-6">
                    <textarea className="form-control" id="experience"

                              value={user.experience}
                              disabled={true}
                    />
                </div>
              </div>
            </>

        )}

        {user.role === "RECRUITER" && (

            <div className="form-group row mb-3">
              <label className="col-sm-2 col-form-label">
                Company
              </label>
              <div className="col-sm-6">
                <input className="form-control" id="company"
                       value={user.company}
                />
              </div>
            </div>

        )}
        {currentUser.role === "RECRUITER" && user.role === "JOB SEEKER" && status === LOGIN_STATE.LOGGED_IN && (
        <div className="row float-right">

          <button type="button" className="btn btn-primary float-end"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => create(currentUser._id, user)}>
            Add to my candidates list
          </button>
        </div>)

        }

        <div className="modal fade" id="exampleModal" tabIndex="-1"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <button type="button" className="btn-close"
                        data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                You have successfully added this user to your candidates list!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"
                        data-bs-dismiss="modal">Close
                </button>
              </div>
            </div>
          </div>
        </div>



      </div>
  )
}

const stateToPropsMapper = (state) => {
  return {
    currentUser:state.userReducer,
    status: state.loginReducer,
  }
}

const dispatchPropsMapper = (dispatch) => ({
  create: (uid, user) => userActions.createCandidate(dispatch, uid, user)

})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserDetail)
