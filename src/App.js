import SearchScreen from "./components/search-screen";
import DetailsScreen from "./components/details-screen";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/home-screen";
import LoginScreen from "./components/login-screen";
import ProfileScreen from "./components/profile-screen";
import RegisterScreen from "./components/register-screen";


function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <Route path="/" exact={true}>
                <HomeScreen/>
            </Route>
            <Route path="/login" exact={true}>
                <LoginScreen/>
            </Route>
            <Route path="/profile" exact={true}>
                <ProfileScreen/>
            </Route>
            <Route path="/register" exact={true}>
                <RegisterScreen/>
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
