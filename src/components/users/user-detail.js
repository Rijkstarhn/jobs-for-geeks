import React, {useState} from 'react'
import {Link, useLocation} from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const user = location.state.user;
  const [type, setType] = useState("interested")

  return (
      <div className="container">
        <h1 className="mb-3">User Detail</h1>


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
            Choose a role:
          </label>
          <div className="col-sm-6">
            <select className="form-control form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={user.role}
                    disabled={true}>

              <option value="job-seeker">Job Seeker</option>
              <option value="recruiter">Recruiter</option>
            </select>
          </div>
        </div>

        {user.role === "job-seeker" && (
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

        {user.role === "recruiter" && (

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

        <div className="row float-right">

          <select className="form-select" aria-label="Default select example"
                  value={type}
                  onChange={(e) => setType(e.target.value)}>
            <option value="interested">Interested</option>
            <option value="contacted">Contacted</option>
          </select>
          <button className="btn btn-primary">Add to my candidates list</button>

        </div>


      </div>
  )
}

export default UserDetail;