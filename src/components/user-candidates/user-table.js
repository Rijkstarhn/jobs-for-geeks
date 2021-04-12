import React from 'react'
import {Link} from "react-router-dom";


const users = [
  {
    id: "123",
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
  },
  {id: "223",
    username: "User2",
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
  }

]

const UserTable = () => {
  return (
      <>
        <h1>My candidates list</h1>
        <div className="container dy-table">
          <table className="table">
            <tbody>
            <tr>
              <th className="d-none d-md-table-cell">Username</th>
              <th className="d-none d-lg-table-cell">Note</th>
              <th></th>

            </tr>

            {
              users.map((user, ndx) =>
                  <h1>user.username</h1>
              )
            }

            </tbody>
          </table>
        </div>
      </>
  )

}

export default UserTable