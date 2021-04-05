import React from 'react'
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return(
        <div>
            <h2>Home Screen</h2>
            <Link to="/login">
                Login
            </Link>
            <br/>
            <Link to="/search">
                Search
            </Link>
            <br/>
            {/*<Link to="/details">*/}
            {/*    Details*/}
            {/*</Link>*/}
        </div>
    )
}

export default HomeScreen