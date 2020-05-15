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
        if (this.props.loggedIn) {
            return (
                <div className="logged-in-navbar">
                    <Link className="nav-bar-favorites" to={'/favorites'}>Favorites</Link>
                    <button className="btn-nav-signup" onClick={this.logoutUser} >Logout</button>
                </div>
            );
        } else {
            return (
                <div className="btn-nav-bar">
                    <Link className="btn-nav-signup" to={'/signup'} style={{ textDecoration: "none" }}>SIGN UP</Link>
                    <LoginFormContainer />
                </div>
            );
        }
        
    }

    render() {
        return (
            <div className="nav-bar">
                <Link to="/browse">
                    <img className="logo" src="https://i.imgur.com/2wAAQ5P.png?1" alt="logo" height="50px" width="348px"/>
                </Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;