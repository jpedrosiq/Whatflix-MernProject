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

    getLinks() {
            return (
                <div className="btn-nav-bar">
                    <Link className="btn-nav-signup" to={'/signup'} style={{ textDecoration:"none" }}>SIGN UP</Link>
                    <LoginFormContainer />
                </div>
            );
        
    }

    render() {
        return (
            <div className="nav-bar">
                <Link to="/">
                    <img className="logo" src="https://i.imgur.com/dujClej.png?1" alt="logo" height="50px" width="307px"/>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;