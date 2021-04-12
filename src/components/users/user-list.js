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
const UserList = () => {

    return (
        <>
        <h1>All users</h1>
          <div className="container dy-table">
            <table className="table">
              <tbody>
              <tr>
                <th >Name</th>
                <th >Role</th>

              </tr>

              {
                users.map((user, index) =>
                    <tr>

                      <td>
                        <Link to={{pathname:`/userDetail/${user.id}`,
                          state: { user}}}>{user.username}</Link>
                      </td>
                      <td> {user.role}
                      </td>

                    </tr>
                )
              }

              </tbody>
            </table>
          </div>
        </>
    )
  }
  export default UserList