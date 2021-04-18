import React, {useState} from 'react';
import {Link} from "react-router-dom";
import userService from "../services/user-service";

const userInitial = {
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  role: "job-seeker",
  email: "",
  phone: "",
  company: "",
  skills: "",
  education: "",
  experience: "",
  license: "",

}

const RegisterScreen = () => {
  // const [user, setUser] = useState(userInitial);
  // const [cachedItem, setCashedItem] = useState(user)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [verifyPassword, setVerifyPassword] = useState("")
  const [role, setRole] = useState("")

  const handleSignUp = () => {
    let registerInfo = {};
    registerInfo.username = userName;
    registerInfo.password = password;
    registerInfo.role = role;
    // console.log('cachedItem', userName);
    // alert(registerInfo);
    userService.register(registerInfo)
        .then(response => alert(response))
  }

  return (
      <div className="container">
        <h1 className="mb-3">
          <Link to="/">
            <i className="fas fa-home"/>
          </Link>
          Sign Up
        </h1>
        <form>
          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-6">
              <input className="form-control" id="usernameFld"
                     placeholder="Alice"
                     value={userName}
                     onChange={(e) => setUserName(e.target.value)}/>
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-6">
              <input className="form-control" id="passwordFld"
                     placeholder="123qwe#$%" type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
              Verify Password
            </label>
            <div className="col-sm-6">
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

          {/*<div className="form-group row mb-3">*/}
          {/*  <label className="col-sm-2 col-form-label">*/}
          {/*    First Name*/}
          {/*  </label>*/}
          {/*  <div className="col-sm-6">*/}
          {/*    <input className="form-control" id="firstname"*/}
          {/*           placeholder="John" type="text"*/}
          {/*           value={cachedItem.firstname}*/}
          {/*           onChange={(e) => setCashedItem(*/}
          {/*               {...cachedItem, firstname: e.target.value})}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="form-group row mb-3">*/}
          {/*  <label className="col-sm-2 col-form-label">*/}
          {/*    Last Name*/}
          {/*  </label>*/}
          {/*  <div className="col-sm-6">*/}
          {/*    <input className="form-control" id="lastname"*/}
          {/*           placeholder="Doe"*/}
          {/*           value={cachedItem.lastname}*/}
          {/*           onChange={(e) => setCashedItem(*/}
          {/*               {...cachedItem, lastname: e.target.value})}*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div className="form-group row mb-3">*/}
          {/*  <label htmlFor="exampleInputEmail1" className="form-label col-sm-2 ">*/}
          {/*    Address</label>*/}
          {/*  <div className="col-sm-6">*/}
          {/*    <input type="email" className="form-control"*/}
          {/*           id="exampleInputEmail1" aria-describedby="emailHelp"*/}
          {/*           value={cachedItem.email}*/}
          {/*           onChange={(e) => setCashedItem(*/}
          {/*               {...cachedItem, email: e.target.value})}/>*/}
          {/*  </div>*/}
          {/*</div>*/}


          {/*<div className="form-group row mb-3">*/}
          {/*  <label className="form-label col-sm-2 " htmlFor="phone">Phone number:</label>*/}

          {/*  <div className="col-sm-6">*/}
          {/*    <input className="form-control" type="tel" id="phone" name="phone"*/}
          {/*           value={cachedItem.phone}*/}
          {/*           onChange={(e) => setCashedItem(*/}
          {/*               {...cachedItem, phone: e.target.value})}/>*/}
          {/*  </div>*/}
          {/*</div>*/}


          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label" htmlFor="role-select">
              Choose a role:
            </label>
            <div className="col-sm-6">
              <select className="form-control form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
              >
                <option value="job-seeker">Job Seeker</option>
                <option value="recruiter">Recruiter</option>
              </select>
            </div>
          </div>

          {/*{cachedItem.role === "job-seeker" && (*/}
          {/*    <>*/}
          {/*      <div className="form-group row mb-3">*/}
          {/*        <label className="col-sm-2 col-form-label">*/}
          {/*          Education*/}
          {/*        </label>*/}
          {/*        <div className="col-sm-6">*/}
          {/*          <input className="form-control" id="education"*/}
          {/*                 placeholder="Northeastern University"*/}
          {/*                 value={cachedItem.education}*/}
          {/*                 onChange={(e) => setCashedItem(*/}
          {/*                     {...cachedItem, education: e.target.value})}/>*/}
          {/*        </div>*/}
          {/*      </div>*/}

          {/*      <div className="form-group row mb-3">*/}
          {/*        <label className="col-sm-2 col-form-label">*/}
          {/*          Skills*/}
          {/*        </label>*/}
          {/*        <div className="col-sm-6">*/}
          {/*          <input className="form-control" id="skills"*/}
          {/*                 placeholder="Java, Python..."*/}
          {/*                 value={cachedItem.skills}*/}
          {/*                 onChange={(e) => setCashedItem(*/}
          {/*                     {...cachedItem, skills: e.target.value})}/>*/}
          {/*        </div>*/}
          {/*      </div>*/}

          {/*      <div className="form-group row mb-3">*/}
          {/*        <label className="col-sm-2 col-form-label">*/}
          {/*          License & Certifications*/}
          {/*        </label>*/}
          {/*        <div className="col-sm-6">*/}
          {/*          <textarea className="form-control" id="license"*/}
          {/*                    placeholder="license & certifications"*/}
          {/*                    value={cachedItem.license}*/}
          {/*                    onChange={(e) => setCashedItem(*/}
          {/*                        {...cachedItem, license: e.target.value})}/>*/}
          {/*        </div>*/}
          {/*      </div>*/}



          {/*      <div className="form-group row mb-3">*/}
          {/*        <label className="col-sm-2 col-form-label">*/}
          {/*          Experience*/}
          {/*        </label>*/}
          {/*        <div className="col-sm-6">*/}
          {/*          <textarea className="form-control" id="experience"*/}
          {/*                 placeholder="Work experience"*/}
          {/*                 value={cachedItem.experience}*/}
          {/*                 onChange={(e) => setCashedItem(*/}
          {/*                     {...cachedItem, experience: e.target.value})}/>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </>*/}

          {/*)}*/}

          {/*{cachedItem.role === "recruiter" && (*/}

          {/*    <div className="form-group row mb-3">*/}
          {/*      <label className="col-sm-2 col-form-label">*/}
          {/*        Company*/}
          {/*      </label>*/}
          {/*      <div className="col-sm-6">*/}
          {/*        <input className="form-control" id="company"*/}
          {/*               placeholder="Google"*/}
          {/*               value={cachedItem.company}*/}
          {/*               onChange={(e) => setCashedItem(*/}
          {/*                   {...cachedItem, company: e.target.value})}/>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          {/*)}*/}


          <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">
            </label>
            <div className="col-sm-4">
              <button className="btn btn-primary btn-block"
                    id="registerBtn" onClick = {() => handleSignUp()}>
                Sign up
              </button>
            </div>
          </div>

          <div className="form-group row mb-3">
            <label className="col-sm-1 col-form-label">
            </label>
            <div className="col-sm-6">
              <Link to="/login">
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