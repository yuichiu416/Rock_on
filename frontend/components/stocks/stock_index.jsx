import React, { Component } from 'react';
import Watchlist from './watchlist';

class Stock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="stock">
                <div className="loading-text" >Click symbols on the right to load stock information<br /></div>
                <Watchlist />
            </div>
        )
    }
};

export default Stock;