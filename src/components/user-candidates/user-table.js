import React from 'react'
import {Link, useHistory} from "react-router-dom";
import UserRow from "./user-row";


const users = [
  {
    id: "123",
    passowrd: "Alice",
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
    notes:"contacted"

  },
  {id: "223",
    passowrd: "User2",
    password: "123",
    firstname: "ddd",
    lastname: "",
    role: "job-seeker",
    email: "dddd@gmail.com",
    phone: "1234557",
    company: "",
    skills: "",
    education: "",
    experience: "",
    license: "",
    notes:"interested"
  }

]

const UserTable = () => {
  const history = useHistory()
  return (
      <>
        <h1>
          <div onClick={() => history.goBack()}
               className="btn btn-primary">
            <i className="fas fa-arrow-left fa-2x"/>
          </div>
          My candidates list
        </h1>
        <div className="container dy-table">
          <table className="table">
            <tbody>
            <tr>
              <th className="d-none d-md-table-cell">passowrd</th>
              <th className="d-none d-lg-table-cell">Note</th>
              <th></th>

            </tr>

            {
              users.map((user, ndx) =>
                  <UserRow user={user}/>
              )
            }
            </tbody>
          </table>
        </div>
      </>
  )

}

export default UserTable