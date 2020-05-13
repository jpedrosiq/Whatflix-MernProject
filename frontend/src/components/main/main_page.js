import React from 'react';
import "./main_page.css";

class MainPage extends React.Component {

    render() {
        return (
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
        );
    }
}

export default MainPage;