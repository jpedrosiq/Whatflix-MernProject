import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import SignupFormContainer from './session/signup_form_container';
import MovieDetailPage from './views/MovieDetail/MovieDetail';
import LandingPage from "./views/landing_page/landing_page"


const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/browse" component={LandingPage} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <AuthRoute exact path="/movie/:movieId" component={MovieDetailPage}/>
        </Switch>
    </div>
);

export default App;