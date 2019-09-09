import React, { Component } from 'react';
import Watchlist from './watchlist';

class Stock extends Component {
    constructor(props){
        super(props);
        this.handleFetch = this.handleFetch.bind(this);
    }
    handleFetch(ticker){
        this.props.fetchStock(ticker).then(stocks => this.setState(stocks));
    }
    render() {
        let container, ul;
        if(this.state && this.state.stock)
            container = this.state;
        if(container && container.stock){
            ul = 
            <ul>
                <li>Symbol: {container.stock.symbol}</li>
                <li>Exchange: {container.stock.exchange}</li>
                <li>Induxtry: {container.stock.induxtry}</li>
                <li>CEO: {container.stock.CEO}</li>
                <li>Address: {container.stock.address}</li>
                <li>City: {container.stock.city}</li>
                <li>Company Name: {container.stock.companyName}</li>
                <li>Country: {container.stock.country}</li>
                <li><p>Description: {container.stock.description}</p></li>
                <li>Security Name: {container.stock.securityName}</li>
                <li>Tags: {container.stock.tags}</li>
                <li>Website: {container.stock.website}</li>
            </ul>
        }
        else 
            ul = <div id="loading-text">Loading Stock Information</div>
        return (
            <div id="stock">
                {ul}
                <Watchlist handleFetch={this.handleFetch} />
            </div>
        )
    }
}
export default Stock;