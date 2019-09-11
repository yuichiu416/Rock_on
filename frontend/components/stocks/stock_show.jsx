import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import { stockList } from '../stocks/watchlist';
import TransactionForm from './transaction_form';
import { handleBigNum } from '../../util/number_util';

// import Footer from '../footer/footer';
const tabs = [
    { title: 'Buy', Shares: 0, price: 0, credit: "Estimated Cost", hint: "Buying Power Available"},
    { title: 'Sell', Shares: 0, price: 0, credit: "Estimated Credit", hint: "Shares Available" }
];

class StockShow extends React.Component {
    constructor(props){
        super(props);
        this.handleFetch = this.handleFetch.bind(this);
    }
    componentDidMount() {
        const ticker = this.props.match.params.ticker;
        if (!this.props.stock) {
            this.handleFetch(ticker);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.ticker !== prevProps.match.params.ticker) {
            const ticker = this.props.match.params.ticker;
            this.handleFetch(ticker);
        }
    }
    handleFetch(ticker) {
        this.props.fetchStock(ticker).then(
            stocks => this.setState(stocks)).then(() => {
                const lessDescription = this.state.stock.description.substring(0, 240);
                const moreDescription = this.state.stock.description.substring(240);
                this.setState({ lessDescription: lessDescription, moreDescription: moreDescription });
            });
        this.props.fetchStockStatistics(ticker).then(stats => {
            this.setState(stats)
        });
    }
    myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var linkText = document.getElementById("read-more-link");
        if (dots.style.display === "none") {
            dots.style.display = "inline";
            linkText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            linkText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

    render() {
        const { currentUser, logout} = this.props;
        let stockInfo;
        window.handleBigNum = handleBigNum;
        if (this.state && this.state.stock && this.state.stats) {
            const tags = this.state.stock.tags.map(tag => {
                return <li className="tag" key={tag}>{tag}</li>
            });
            stockInfo =
                <div className="stock-panel">
                    <div className="panel-all-1 tags">
                        <ul>{tags}</ul>
                    </div>
                    <h1 className="panel-all-2">{this.state.stock.companyName}</h1>
                        <h2 className="panel-all-3 about-h2">About</h2>
                            <p className="panel-all-4">{this.state.lessDescription}
                            <span id="dots">...</span>
                            <span id="more">{this.state.moreDescription}</span>
                        </p>
                        <a onClick={this.myFunction} id="read-more-link" className="panel-all-3">Read more</a>
                <span className="cell-1-1"><span className="bold">CEO</span><br/>{this.state.stock.CEO}</span>
                <span className="cell-1-2"><span className="bold">Company Name</span><br />{this.state.stock.companyName}</span>
                <span className="cell-1-3"><span className="bold">Headquarters</span><br />{this.state.stock.city}</span>   
                <span className="cell-1-4"><span className="bold">Market Cap</span><br />{handleBigNum(this.state.stats.marketcap)}</span>   
                <span className="cell-2-1"><span className="bold">Price-Earnings-Ratio</span><br />{this.state.stats.peRatio}</span>   
                <span className="cell-2-2"><span className="bold">Employees</span><br />{this.state.stats.employees}</span>   
                <span className="cell-2-3"><span className="bold">52 Week High</span><br />{this.state.stats.week52high}</span>   
                <span className="cell-2-4"><span className="bold">52 Week Low</span><br />{this.state.stats.week52low}</span>
                </div>
        }
        else
            stockInfo = <div className="loading-text">Loading stock information</div>
        return (
            <div>
                <NavBar currentUser={currentUser} logout={logout} stockList={stockList}/>
                <div className="stock">
                    {stockInfo}
                    <TransactionForm tabs={tabs} />
                </div>
            </div>
        )
    }
}

export default StockShow;