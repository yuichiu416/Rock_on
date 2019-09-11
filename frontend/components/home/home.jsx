import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Stock from '../stocks/stock_index';
import { stockList } from '../stocks/watchlist';

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
            <div class="home">
                <NavBar currentUser={currentUser} logout={logout} stockList={stockList}/>
                {display}
               
            </div>
        )
    }
}
