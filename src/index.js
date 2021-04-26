import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {loginReducer} from "./redux/reducers/login-reducer";
import {userReducer} from "./redux/reducers/user-reducer";
import {usersReducer} from "./redux/reducers/allusers-reducer";
import {savedJobsReducer} from "./redux/reducers/saved-jobs-reducer";
import {savedCandidatesReducer} from "./redux/reducers/saved-candidates-reducer";

const reducer = combineReducers({
                                    loginReducer: loginReducer,
                                    userReducer: userReducer,
                                    usersReducer: usersReducer,
                                    savedJobsReducer: savedJobsReducer,
                                    savedCandidatesReducer: savedCandidatesReducer,
                                })
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>

        <App/>

    </Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
