import React from 'react';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import HomeContainer from './home/home_container'; 
import StockShowContainer from './stocks/stock_show_container'; 
import { Route, Redirect, Switch, Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Switch>
                <AuthRoute path="/signup" component={SignupContainer} />
                <AuthRoute path="/login" component={LoginContainer} />
                <Route exact path='/' component={HomeContainer} />
                <ProtectedRoute exact path='/stocks/:ticker' component={StockShowContainer} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};
