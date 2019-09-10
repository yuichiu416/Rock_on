import React, { Component } from 'react';
import Watchlist from './watchlist';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.handleFetch = this.handleFetch.bind(this);
    }
    handleFetch(ticker) {
        this.props.fetchStock(ticker).then(stocks => this.setState(stocks));
    }
    render() {
        return (
            <div className="stock">
                <div className="loading-text" >Click symbols on the right to load stock information</div>
                <Watchlist />
            </div>
        )
    }
}
export default Stock;