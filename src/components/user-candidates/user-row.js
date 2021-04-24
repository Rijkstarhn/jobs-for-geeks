import React, {useState} from 'react'
import {Link} from "react-router-dom";
import userActions from "../../redux/actions/user-action";
import {connect} from "react-redux";

const UserRow = (
    { user, seeker,
      deleteUser,
      updateUser
    }) => {

  const [editing, setEditing] = useState(false)
  const [newNote, setNewNote] = useState(user.notes)

  const handleUpdate = () => {
    let newUser = {
      ...user,
      note: newNote
    }
    updateUser(newUser)
  }

  return (
      <tr>
        <td>

          <Link to={{pathname:`/userDetail/${seeker._id}`,
            state: { seeker}}}>{seeker.username}</Link>
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
                           deleteUser(user._id, seeker)
                         }
                         }></i>}
          {editing && <i className="fas fa-check float-right fa-2x"
                         onClick={() => handleUpdate()}></i>}
          {!editing && <i className="fas fa-edit float-right fa-2x"
                          onClick={() => {
                            setEditing(true)
                          }}></i>}
        </td>
      </tr>)
}

const stateToPropsMapper = (state) => {
  return {
    // user: state.userReducer
  }
}

const dispatchPropsMapper = (dispatch) => ({
  deleteUser:(uid, seeker) => userActions.deleteCandidate(dispatch, uid, seeker),
  updateUser:(user) => userActions.updateCandidate(dispatch, user)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserRow)
