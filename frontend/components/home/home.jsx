import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Stock from '../stocks/stock_index_container';
import { ProtectedRoute } from '../../util/route_util';
import News from '../news';
import Splash from './splash';
import Footer from './footer';
import Papa from 'papaparse';
import StockShowContainer from '../stocks/stock_show_container';
import { Switch } from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            stockList: []
        }
    }
    componentDidMount(){
        Papa.parse("companylist.csv", {
            download: true,
            complete: results => {
                this.setState({ stockList: results.data.map((stock, i) => stock[0]).slice(1)})
            }
        });
    }
    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (<Stock stockList={this.state.stockList}/>) : (<Splash />) 
        return (
            <div className="home">
                <NavBar currentUser={currentUser} logout={logout} stockList={this.state.stockList}/>
                <Switch>
                    <ProtectedRoute exact path='/stocks/:ticker' component={StockShowContainer} />
                    {display}
                </Switch>
                <ProtectedRoute path="/" component={News} />
                <Footer />
            </div>
        )
    }
}
