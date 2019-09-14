import React, { Component } from 'react';
import Watchlist, { stockList } from './watchlist';
import { calculateBalance, calculateShares } from "../../util/number_util";

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0, stocks: []};
        const user_id = props.currentUser.id;
        this.handlePortfolio = this.handlePortfolio.bind(this);
        props.getAllStocksHaving(user_id).then(() => this.handlePortfolio());
    }
    handlePortfolio(){
        const portfolio = this.props.portfolio;
        for(const ticker in portfolio){
            const balance = 0, shares = 0;
            portfolio[ticker].map(info => {
                balance += info.price;
                shares += info.num_shares;
            });
            this.setState({total: this.state.total + balance, stocks: this.state.stocks.concat({shares: shares, ticker: ticker})});
        }
    }
    render() {
        const list = this.state.stocks.map(info => {
            if(info.shares === 0)
                return ;
            return <li key={info.ticker}>{info.ticker}: {info.shares} shares</li>
        });
        return (
            <div className="stock">
                <div className="portfolio">
                    <h1>Portfolio</h1><br/><br/>
                    <h3>Cash balance:</h3>
                    <h3 className="margin-auto">${this.state.total.toFixed(2)}</h3>
                    <h3>Stocks available:</h3>
                    <ul className="white-sheet">
                        {list}
                    </ul>
                </div>
                <Watchlist />
            </div>
        )
    }
};

export default Stock;