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
        this.props.fetchStock(ticker).then(stocks => {
            this.setState(stocks)}).then(() => {
                const lessDescription = this.state.stock.description.substring(0, 240);
                const moreDescription = this.state.stock.description.substring(240);
                this.setState({ lessDescription: lessDescription, moreDescription: moreDescription });
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
        if (this.state) {
            const tags = this.state.stock.tags.map(tag => {
                return <li className="tag" key={tag}>{tag}</li>
            });
            stockInfo =
                <div className="stock-panel">
                    <div className="tags">
                        <ul>{tags}</ul>
                    </div>
                    <h1 className="stock-name">{this.state.stock.symbol}</h1>
                        <h2 className="about-h2">About</h2>
                        <p className="about-p">{this.state.lessDescription}
                            <span id="dots">...</span>
                            <span id="more">{this.state.moreDescription}</span>
                        </p>
                        <a onClick={this.myFunction} id="read-more-link">Read more</a>
                        <span className="about-ceo">CEO<br/>{this.state.stock.CEO}</span>
                        <span className="about-company-name">Company Name<br />{this.state.stock.companyName}</span>
                        <span className="about-hq">Headquarters<br />{this.state.stock.city}</span>           
                </div>
        }
        else
            stockInfo = <div className="loading-text">Loading stock information</div>
        return (
            <div>
                <NavBar currentUser={currentUser} logout={logout} />
                <div className="stock">
                    {stockInfo}
                    <Watchlist />
                </div>
            </div>
        )
    }
}

export default StockShow;