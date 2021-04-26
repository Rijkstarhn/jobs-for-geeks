import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";
import LoginScreen from "./components/login-screen";
import ProfileScreen from "./components/profile-screen";
import RegisterScreen from "./components/register-screen";
import UserList from "./components/users/user-list";
import UserDetail from "./components/users/user-detail";
import JobTable from "./components/user-jobs/job-table";
import UserTable from "./components/user-candidates/user-table";
import Login from "./components/login";
import Redirect from "react-router-dom/es/Redirect";
import React from "react";
import Register from "./components/register";


function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Route path="/" exact={true}>
                <Redirect to={"/search"}/>
            </Route>
            <Route path="/login" exact={true}>
                <Login/>
            </Route>
            <Route path="/profile" exact={true}>
                <ProfileScreen/>
            </Route>
            <Route path="/register" exact={true}>
                <Register/>
            </Route>

          <Route path="/userlist" exact={true}>
            <UserList/>
          </Route>

          <Route path="/profile/:userId" exact={true}>
            <UserDetail/>
          </Route>

          <Route path="/:userId/myjob" exact={true}>
            <JobTable/>
          </Route>

          <Route path="/:userId/candidates" exact={true}>
            <UserTable/>
          </Route>


          <Route path={["/search", "/search/:description?/:location?"]}
                   exact={true}>
                <SearchScreen/>
            </Route>
            <Route path="/details/:jobId" exact={true}>
                <DetailsScreen/>
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
