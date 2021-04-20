import React, {useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";
import loginActions from "../../redux/actions/login-action";
import {connect} from "react-redux";
import userActions from "../../redux/actions/user-action";

const UserList = ({users=[], findAllUsers}) => {

    useEffect(() => {
        findAllUsers()
    }, [])

    const history = useHistory()
    console.log("users", users)
    return (
        <>
            <h1>
                <div onClick={() => history.goBack()}
                     className="btn btn-primary">
                    <i className="fas fa-arrow-left fa-2x"/>
                </div>
                All users
            </h1>
            <div className="container dy-table">
                <table className="table">
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>

                    </tr>

                    {
                        users.map((user, index) =>
                                      <tr>

                                          <td>
                                              <Link to={{
                                                  pathname: `/userDetail/${user.id}`,
                                                  state: {user}
                                              }}>{user.username}</Link>
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
const stateToPropsMapper = (state) => {
    return {
        users: state.usersReducer
    }
}

const dispatchPropsMapper = (dispatch) => ({
    findAllUsers: () => userActions.findAllUsers(dispatch)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserList)
