import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import Chunk1 from './home/chunk1';
import { AuthRoute, ProtectedRoute, BinaryRoute} from '../util/route_util';
import HomeContainer from './home/home_container'; 
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Switch>
                <AuthRoute path="/signup" component={SignupContainer} />
                <AuthRoute path="/login" component={LoginContainer} />
                {/* <AuthRoute path="/" component={GNavContainer} /> */}
                {/* <ProtectedRoute path="/" component={CNavContainer} />
                <ProtectedRoute exact path="/" component={LoggedIn} /> */}

                <Route exact path='/' component={HomeContainer} />
                <AuthRoute exact path="/" component={Chunk1} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};
