import React, { Component } from 'react';
import Watchlist from './watchlist';
import { Link } from 'react-router-dom';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0, stocks: [], balance: 0};
        this.handlePortfolio = this.handlePortfolio.bind(this);
    }
    
    calculateBalance(deposits) {
        if (!deposits || deposits.length < 1)
        return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
    }
    componentDidMount(){
        const user_id = this.props.currentUser.id;
        this.props.fetchTransactions(user_id).then(() => this.calculateBalance(this.props.deposits.deposit));
        this.props.getAllStocksHaving(user_id).then(() => this.handlePortfolio());
    }
    handlePortfolio(){
        const portfolio = this.props.portfolio;
        for(const ticker in portfolio){
            const balance = 0, shares = 0;
            portfolio[ticker].map(info => {
                balance += info.price * info.num_shares;
                shares += info.num_shares;
            });
            this.setState({total: this.state.total + balance, stocks: this.state.stocks.concat({shares: shares, ticker: ticker})});
        }
    }
    render() {
        const list = this.state.stocks.map(info => {
            if(info.shares === 0)
                return <li>No stocks in hand</li>;
            return <li key={info.ticker}><Link to={`/stocks/${info.ticker}`}>{info.ticker}</Link>: {info.shares} shares</li>
        });
        return (
            <div className="stock">
                <div className="portfolio">
                    <h1>Portfolio</h1><br/><br/>
                    <table className="portfolio-table">
                        <tbody>
                            <tr>
                                <td><h3>Total stock value:</h3></td>
                                <td><h3 className="margin-auto"> ${this.state.total.toFixed(2)}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Cash balance:</h3></td>
                                <td><h3 className="margin-auto"> ${this.state.balance.toFixed(2)}</h3></td>
                            </tr>
                            <tr>
                                <td><h3>Total Account value:</h3></td>
                                <td><h3 className="margin-auto"> ${(this.state.total + this.state.balance).toFixed(2)}</h3></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <h3>Stocks in hand:</h3>
                    <ul className="white-sheet">
                        {list}
                    </ul>
                </div>
                <Watchlist/>
            </div>
        )
    }
};

export default Stock;