import React, {useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";
import loginActions from "../../redux/actions/login-action";
import {connect} from "react-redux";
import userActions from "../../redux/actions/user-action";
import banner from "../../res/banner_teams.jpg";

const UserList = ({users=[], findAllUsers}) => {

    useEffect(() => {
        findAllUsers()
    }, [])

    const history = useHistory()
    console.log("users", users)
    return (
        <div className="container">
            <img src={banner} className="img-fluid" alt="signup_banner"/>
            <h1>
                All Users
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
                                                  pathname: `/userDetail/${user._id}`,
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
            <div className="col-sm-6">
                <Link
                    className="btn btn-outline-primary backHomeBtn" to="/">
                    Homepage
                </Link>
            </div>
        </div>
    )
}
const stateToPropsMapper = (state) => {
    return {
        users: state.usersReducer,
    }
}

const dispatchPropsMapper = (dispatch) => ({
    findAllUsers: () => userActions.findAllUsers(dispatch)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(UserList)
