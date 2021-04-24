import React, {useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";
import UserRow from "./user-row";
import {connect} from "react-redux";
import userActions from "../../redux/actions/user-action";

const UserTable = ({user, seekers, findAllSavedCandidates}) => {
  console.log("saved user", seekers)
  const history = useHistory()
  useEffect(() => {
    findAllSavedCandidates(user._id)
  }, [])
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
              <th className="d-none d-md-table-cell">Username</th>
              <th className="d-none d-lg-table-cell">Note</th>
              <th></th>

            </tr>

            {
              seekers.map((seeker) =>
                  <UserRow user={user} seeker={seeker}/>
              )
            }
            </tbody>
          </table>
        </div>
      </>
  )

}

const stateToPropsMapper = (state) => {
  return {
    user: state.userReducer,
    seekers: state.savedCandidatesReducer
  }
}

const dispatchPropsMapper = (dispatch) => ({
  findAllSavedCandidates: (uid) => userActions.getSavedCandidatesForUser(dispatch, uid)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserTable)