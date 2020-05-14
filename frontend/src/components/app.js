import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import SignupFormContainer from './session/signup_form_container';
import MovieDetailPage from './views/MovieDetailPage/MovieDetailPage';


const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/movie/:movieId" component={Auth(MovieDetailPage, null)}/>
        </Switch>
    </div>
);

export default App;