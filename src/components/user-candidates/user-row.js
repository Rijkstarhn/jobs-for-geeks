import React, {useState} from 'react'
import {Link} from "react-router-dom";

const UserRow = (
    {
      user
    }) => {

  const [editing, setEditing] = useState(false)
  const [newNote, setNewNote] = useState(user.notes)
  const deleteUser = (course) => {
    console.log("delete")
  }

  const updateUser = () => {
    setEditing(false)
    console.log("update")
  }
  return (
      <tr>
        <td>

          <Link to={{pathname:`/userDetail/${user.id}`,
            state: { user}}}>{user.username}</Link>


        </td>
        <td className="d-none d-lg-table-cell">         {
          !editing && (
              <>
                {user.notes}
              </>
          )

        }
          {
            editing &&           <select className="form-select" aria-label="Default select example"
                                         value={user.notes}
                                         onChange={(e) => setNewNote(e.target.value)}>
              <option value="interested">Interested</option>
              <option value="contacted">Contacted</option>
            </select>
          }
        </td>

        <td>
          {editing && <i className="fas fa-times float-right fa-2x"
                         onClick={() => {
                           setEditing(false)
                           deleteUser(user)
                         }
                         }></i>}
          {editing && <i className="fas fa-check float-right fa-2x"
                         onClick={updateUser}></i>}
          {!editing && <i className="fas fa-edit float-right fa-2x"
                          onClick={() => {
                            //
                            // console.log('HERE',title)
                            // console.log('HERE',newTitle)
                            // setNewTitle(title)
                            setEditing(true)
                          }}></i>}
        </td>
      </tr>)
}

export default UserRow