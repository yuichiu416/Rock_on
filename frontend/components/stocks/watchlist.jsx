import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllStocksHaving } from "../../actions/stock_actions";

export const stockList = [
    "MSFT",
    "AMD",
    "DIS",
    "INTC",
    "TSLA",
    "NVDA",
    "AAPL",
    "SQ",
    "GPRO",
    "SNAP",
    "FB",
    "AMZN",
    "BAC",
    "NFLX",
    "UBER",
    "TWTR",
    "FIT",
    "BABA",
    "ZNGA",
    "CHK",
    "NIO",
    "T",
    "APHA",
    "S",
    "ATVI",
    "KO",
    "LYFT",
    "V",
    "IQ",
    "PYPL",
    "SPY",
    "CSCO",
    "CRM",
    "F"
];
const prices=[143.98, 36.06,140.22,57.85,334.50,207.66,258.69,63.18,4.78,14.18,190.00,1787.89,33.07,288.87,27.48,29.16,6.96,187.9,6.27,0.93,2.13,39.34,4.8,6.17,53.5,52.46,43.23,178.38,19.74,100.02,307.8,48.42,159.25]

class Watchlist extends Component {
    constructor(props) {
        super(props);
        this.handlePortfolio = this.handlePortfolio.bind(this);
        this.state = { stocks: [] };
    }

    componentDidMount() {
        const user_id = this.props.currentUser.id;
        this.props.getAllStocksHaving(user_id).then(() => this.handlePortfolio());
    }

    handlePortfolio() {
        const portfolio = this.props.portfolio;
        for (const ticker in portfolio) {
            const balance = 0, shares = 0;
            portfolio[ticker].map(info => {
                balance += info.price * info.num_shares;
                shares += info.num_shares;
            });

            this.setState({ total: this.state.total + balance, stocks: this.state.stocks.concat({ shares: shares, ticker: ticker }) });
        }
    }

    render() {

        const shares = this.state.stocks.map((info, i) => {
            if (info.shares === 0)
                return "";
            return  <li key={info.ticker}>
                        <div><Link to={`/stocks/${info.ticker}`}>{info.ticker}</Link> </div>
                        <div>{info.shares} shares</div>
                        ${prices[i]}
                    </li>

        });
        // const list = stockList.map((ticker) => {
        //     return (
        //         <ul key={ticker}>
        //             <li><Link to={`/stocks/${ticker}`}>{ticker}</Link></li>
        //         </ul>
        //     );
        // });
        return (

            <Paper className="white-sheet">
                <ul className="watchlist">
                    <li>Stocks</li>
                    {shares}
                </ul>
                {/* <div>{list}</div> */}
            </Paper>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        portfolio: state.entities.transactions.portfolio

    };
};

const mapDispatchToProps = dispatch => ({
    getAllStocksHaving: user_id => dispatch(getAllStocksHaving(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);