import React from 'react';
import "./main_page.css";
import NavBarContainer from "../nav/navbar_container";

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <NavBarContainer />
                <div>
                    <div className="main-page">
                        <div className="showcase">
                            <div className="showcase-box">
                                <img src="https://i.imgur.com/HLCwM97.png"/>
                            
                                <div className="main-header-title">
                                    The platform that will help you pick the right movie to watch!
                                </div>
                            </div>
                        </div>
                        <footer>
                            Created by: Pedro Siqueira, Willie Wang, Helena Zarazua, Jared Lester.
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;