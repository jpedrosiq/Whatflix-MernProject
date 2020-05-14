import React from 'react';
import "./main_page.css";
import NavBarContainer from "../nav/navbar_container";
import { Link } from "react-router-dom";

class MainPage extends React.Component {

    render() {
        return (
            <div>
                {/* <NavBarContainer /> */}
                <div>
                    <div className="main-page">
                        <div className="showcase">
                            <div className="showcase-box">
                                <div className="main-header-title">
                                    The platform that will help you pick the right movie to watch!
                                </div>
                                <Link to="/browse" className="main-start-btn">
                                    FIND YOUR MOVIE!  &nbsp; <i className="fa fa-angle-right" style={{fontSize:"50px"}}> </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;