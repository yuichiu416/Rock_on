import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTransactions, getAllStocksHaving } from "../../actions/stock_actions";

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
    "TECHY",
    "CRM",
    "F"
];

class Watchlist extends Component{
    constructor(props){
        super(props);
        this.handlePortfolio = this.handlePortfolio.bind(this);
        this.state = {stocks: [] };
    }

    componentDidMount(){
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

    render(){
        const shares = this.state.stocks.map(info => {
          if (info.shares === 0)
            return <li></li>;
          return <li key={info.ticker} ><Link to={`/stocks/${info.ticker}`}>{info.ticker}<br />{info.shares} shares</Link></li>

        });
        // const list = stockList.map((ticker, idx) => {
        //     return (
        //         <ul key={ticker}>
        //             <li><Link to={`/stocks/${ticker}`}>{idx}</Link></li>
        //             <li><Link to={`/stocks/${ticker}`}>{ticker}</Link></li>
        //         </ul>
        //     );
        // });
        return (
          <Paper className="watchlist white-sheet">
                <div className="watchlist-header">
                  <span>Stock Symbol</span><br/>
                  {shares}
                </div>
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