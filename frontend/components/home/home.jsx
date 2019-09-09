import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Stock from '../stocks/stock_index';

import { AuthRoute, ProtectedRoute, BinaryRoute } from '../../util/route_util';
import Splash from './splash';
export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (<Stock />) : (<Splash />) 
        return (
            <div id="home">
                <NavBar currentUser={currentUser} logout={logout} />
                {display}
               
            </div>
        )
    }
}
