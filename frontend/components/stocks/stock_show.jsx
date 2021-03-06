import React from 'react';
import TransactionForm from './transaction_form_container';
import { handleBigNum } from '../../util/number_util';

// import Footer from '../footer/footer';
const tabs = [
    { title: 'Buy',  credit: "Estimated Cost", hint: "Buying Power Available"},
    { title: 'Sell', credit: "Estimated Credit", hint: "Shares Available" }
];
class StockShow extends React.Component {
    constructor(props){
        super(props);
        this.state = { balance: 0};
        this.handleFetch = this.handleFetch.bind(this);
    }
    componentDidMount() {
        const ticker = this.props.match.params.ticker;
        this.handleFetch(ticker);
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
        this.props.fetchStockStatistics(ticker);
        this.props.getStockPrice(ticker);
    }
    toggleMoreLess() {
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
        let price;
        if(this.props.price)
            price = this.props.price.toFixed(2);
        if (this.props.stock && this.props.stats) {
            const { CEO, companyName, city, tags, website } = this.props.stock;
            const { marketcap, peRatio, employees, week52high, week52low } = this.props.stats;
            const taglist = tags.map(tag => {
                return <li className="tag red" key={tag}>{tag}</li>
            });
            stockInfo =
                <div className="stock-panel">
                    <div className="panel-all-1 tags"><ul>{taglist}</ul></div>
                    <h1 className="panel-all-2">
                        <a href={website} className="hover-text-underline no-text-decoration">{companyName}</a><br/><br/>
                        ${price}
                    </h1>
                    <h2 className="panel-all-3 about-h2">About</h2>
                    <p className="panel-all-4">{this.state.lessDescription}
                        <span id="dots">...</span>
                        <span id="more">{this.state.moreDescription}</span>
                    </p>
                    <a onClick={this.toggleMoreLess} id="read-more-link" className="panel-all-3">Read more</a>
                    <span className="cell-1-1"><span className="bold">CEO</span><br/>{CEO}</span>
                    <span className="cell-1-2"><span className="bold">Company Name</span><br />{companyName}</span>
                    <span className="cell-1-3"><span className="bold">Headquarters</span><br />{city}</span>   
                    <span className="cell-1-4"><span className="bold">Market Cap</span><br />{handleBigNum(marketcap)}</span>   
                    <span className="cell-2-1"><span className="bold">Price-Earnings-Ratio</span><br />{peRatio}</span>   
                    <span className="cell-2-2"><span className="bold">Employees</span><br />{employees}</span>   
                    <span className="cell-2-3"><span className="bold">52 Week High</span><br />{week52high}</span>   
                    <span className="cell-2-4"><span className="bold">52 Week Low</span><br />{week52low}</span>
                </div>
        } else{
            stockInfo = <div className="loading-text">Loading stock information</div>
        }
        return (
            <div className="home">
                <div className="stock">
                    {stockInfo}
                    <TransactionForm tabs={tabs} balance={this.state.balance} price={price}/>
                </div>
            </div>
        )
    }
};

export default StockShow;