import React, { Component } from 'react';
import Watchlist from './watchlist';
import { Link } from 'react-router-dom';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0, stocks: [], balance: 0};
    }
    
    calculateBalance(deposits) {
        if (!deposits || deposits.length < 1)
        return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
    }
    componentDidMount(){
        const user_id = this.props.currentUser.id;
        this.props.fetchTransactions(user_id).then(() => this.calculateBalance(this.props.deposits.deposit));
    }

    render() {
        return (
            <div className="stock">
                <div className="portfolio">
                    {/* <h1>Portfolio</h1><br/><br/>
                    <ul className="portfolio-table">
                            <li><h3>Total stock value:</h3></li>
                            <li><h3 className="margin-auto"> ${this.state.total.toFixed(2)}</h3></li>
                
                            <li><h3>Cash balance:</h3></li>
                            <li><h3 className="margin-auto"> ${this.state.balance.toFixed(2)}</h3></li>
                
                            <li><h3>Total Account value:</h3></li>
                            <li><h3 className="margin-auto"> ${(this.state.total + this.state.balance).toFixed(2)}</h3></li>
                    </ul> */}
                </div>
                <Watchlist/>
            </div>
        )
    }
};

export default Stock;