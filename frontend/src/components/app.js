import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import SignupFormContainer from './session/signup_form_container';
import MovieDetailPage from './views/MovieDetail/MovieDetail';
import LandingPage from "./views/landing_page/landing_page"
import FavoritePage from "./views/FavoritePage/FavoritePage"


const App = () => (
    <div>
        <header>
            <NavBarContainer />
        </header>
        <Switch>
            <Route path="/browse" component={LandingPage} />
            <Route path="/signup" component={SignupFormContainer} />
            <Route path="/movie/:movieId" component={MovieDetailPage}/>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/favorites" component={FavoritePage} />
        </Switch>
    </div>
);

export default App;