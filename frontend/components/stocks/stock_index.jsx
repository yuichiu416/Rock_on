import React, { Component } from 'react';
import Watchlist from './watchlist';

class Stock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let stockList;
        return (
            <div className="stock">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <h3>Cash balance:</h3>
                    <h3>Stocks having:</h3>
                    <ul>
                        {stockList}
                    </ul>
                </div>
                <Watchlist />
            </div>
        )
    }
};

export default Stock;