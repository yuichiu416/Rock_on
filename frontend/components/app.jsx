import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import GuestNavBarContainer from './nav_bar/guest_container';
import CustomertNavBarContainer from './nav_bar/customer_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Chunk1 from './home/chunk1';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

export default () => (
    <div>
        <Route path="/" component={GuestNavBarContainer} />
        <Route exact path="/" component={Chunk1} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);
