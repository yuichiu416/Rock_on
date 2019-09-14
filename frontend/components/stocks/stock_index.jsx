import React, { Component } from 'react';
import Watchlist, { stockList } from './watchlist';
import { calculateBalance, calculateShares } from "../../util/number_util";

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0, stocks: []};
        this.calculateBalance = calculateBalance;
        this.calculateShares = calculateShares;
        const user_id = props.currentUser.id;
        this.handlePortfolio = this.handlePortfolio.bind(this);
        // props.fetchTransactions(user_id).then(() => 
        //     this.calculateBalance(props.deposits.deposit)).then(balance =>
        //         this.setState({balance: balance}));
        props.getAllStocksHaving(user_id).then(() => this.handlePortfolio());
            // this.calculateShares(props.transactions.transactions)).then(available_shares => 
            //     this.setState({available_shares: available_shares}));
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
                    <h1>Portfolio</h1>
                    <h3>Cash balance: ${this.state.total.toFixed(2)}</h3><br/><br/>
                    <h3>Stocks available:</h3>
                    <ul>
                        {list}
                    </ul>
                </div>
                <Watchlist />
            </div>
        )
    }
};

export default Stock;