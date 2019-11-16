import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Stock from '../stocks/stock_index_container';
import { stockList } from '../stocks/watchlist';
import { ProtectedRoute} from '../../util/route_util';
import News from '../news';
import Splash from './splash';
import Footer from './footer';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (<Stock />) : (<Splash />) 
        return (
            <div className="home">
                <NavBar currentUser={currentUser} logout={logout} stockList={stockList}/>
                {display}
                <ProtectedRoute exact path="/" component={News} />
                <Footer />
            </div>
        )
    }
}
