import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import HomeContainer from './home/home_container'; 
import { Route, Redirect, Switch } from 'react-router-dom';

export default () => {
    return (
        <Switch>
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path='/' component={HomeContainer} />
            <Redirect to="/" />
        </Switch>
    );
};
