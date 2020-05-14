import React from "react";
import "./browse_navbar.css";
import { Link } from 'react-router-dom';


class BrowseNavBar extends React.Component {
    
    render() {
        <div>
            <div>
                {/* <Link to={'/browse'}>All Movies</Link>
                <Link to={'/profile'}>Profile</Link> */}
                <Link to="/">
                    <img src="https://i.imgur.com/dujClej.png?1" alt="logo" />
                </Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>

        </div>
    }

}

export default BrowseNavBar;