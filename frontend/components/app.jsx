import React from 'react';
import GNavContainer from './nav_bar/guest_container';
import CNavContainer from './nav_bar/customer_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Chunk1 from './home/chunk1';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, BinaryRoute} from '../utils/route_util';
import LoggedIn from './home/loggedin';

export default () => {
    return (

        <div>
        <AuthRoute path="/" component={GNavContainer} />
        <AuthRoute exact path="/" component={Chunk1} />

        <ProtectedRoute path="/" component={CNavContainer} />
        <ProtectedRoute exact path="/" component={LoggedIn} />
        
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        {/* <Route path="/" component={GNavContainer} />
        <Route exact path="/" component={Chunk1} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <ProtectedRoute path="/chirps" component={LoggedIn} /> */}
        </div>
    );
};
