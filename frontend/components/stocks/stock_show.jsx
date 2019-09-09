import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import Watchlist from './watchlist';

// import Footer from '../footer/footer';

class StockShow extends React.Component {
    constructor(props){
        super(props);
        this.handleFetch = this.handleFetch.bind(this);
    }
    componentDidMount() {
        const ticker = this.props.match.params.ticker;
        if (!this.props.stock) {
            this.props.fetchStock(ticker).then( stock => this.setState(stock));
        }
    }
    handleFetch(ticker) {
        this.props.fetchStock(ticker).then(stocks => this.setState(stocks));
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.ticker !== prevProps.match.params.ticker) {
            const ticker = this.props.match.params.ticker;
            this.props.fetchStock(ticker).then(stocks => this.setState(stocks));
        }
    }

    render() {
        const { currentUser, logout} = this.props;
        let stockInfo;
        if (this.state) {
            stockInfo =
                <div className="stock-panel">
                    <li>Tags: {this.state.stock.tags}</li>
                    <h1>Symbol: {this.state.stock.symbol}</h1>
                    <li>Company Name: {this.state.stock.companyName}</li>
                    <li><p>About: {this.state.stock.description}</p></li>
                    <li>CEO: {this.state.stock.CEO}</li>
                    <li>Headquarters: {this.state.stock.city}</li>
                    <li>Website: {this.state.stock.website}</li>
                </div>
        }
        else
            stockInfo = <div id="loading-text">Loading stock information</div>
        return (
            <div>
                <NavBar currentUser={currentUser} logout={logout} />
                <div id="stock">
                    {stockInfo}
                    <Watchlist />
                </div>
            </div>
        )
    }
}

export default StockShow;