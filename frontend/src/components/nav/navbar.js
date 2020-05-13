// src/components/nav/navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import LoginFormContainer from "../session/login_form_container";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link to={'/browse'}>All Movies</Link>
                    <Link to={'/profile'}>Profile</Link>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className="btn-nav-bar">
                    <Link className="btn-nav-signup" to={'/signup'} style={{ textDecoration:"none" }}>SIGN UP</Link>
                    <LoginFormContainer />
                </div>
            );
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <Link to="/">
                    <img src="https://i.imgur.com/HLCwM97.png" />
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;