import React, { Component } from 'react';
import Watchlist from './watchlist';
import { Link } from 'react-router-dom';
import PortfolioChart from '../home/portfolio_chart';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {total: 0, stocks: [], balance: 0};
        this.state = {
            total: 0, 
            stocks: [], 
            balance: 0,
            "1D": [],
            "5dm": [],
            "1mm": [],
            "3M": [],
            "1Y": [],
            "5Y": [],
            // "ALL": [],
            fetched: false,
            timeFrame: "1D",
            tickerSymbol: "",
            openValue: null,
            closeValue: null,
            change: 0,
            changePercent: 0
        }
    }
    
    calculateBalance(deposits) {
        if (!deposits || deposits.length < 1)
        return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
    }
    componentDidMount(){
        const user_id = this.props.currentUser.id;
        this.props.fetchTransactions(user_id).then(() => this.calculateBalance(this.props.deposits.deposit));
    }

    generateData() {
        let data = [];
        var current = new Date();
        var yesterday = new Date(current - 86400000);
        var value = 100000;
        var yesterdayVal = valueChange(value);

        while (data.length < 1900) {
            data.push({ date: yesterday, value: valueChange(value) });
            current = yesterday;
            yesterdayVal = value;
            value = valueChange(yesterdayVal);
            yesterday = new Date(current - 86400000);
        }
    }

    valueChange(val) {
        let decrease = Math.floor(Math.random() * 10) % 2 === 0 && Math.floor(Math.random() * 10) % 3 === 0;
        let rate = 1;
        if (decrease)
            rate *= -1;
        return (1 - rate * Math.random() / 100) * val;
    }

    render() {
        const tF = Object.keys(this.state).map(key => {
            if (key === "1D" || key === "5dm" || key === "1mm" || key === "3M" || key === "1Y" || key === "ALL") {
                return <button className="btns" key={`${key}-id`} onClick={() => { this.updatePrices(key) }}>
                    {key.slice(0, 2).toUpperCase()}
                </button>
            }
        })

        if (this.state.fetched) {
            let data = this.state.portfolioValue.slice().sort((a, b) => {
                return Date.parse(a.date) - Date.parse(b.date)
            }).filter(el => {
                return el !== undefined
            })
            return (
                <div className="stock">
                    <div className="portfolio">
                        <div className="chart-wrap">
                            <PortfolioChart
                                portfolioValue={data}
                                tfVal={this.state[this.state.timeFrame]}
                                timeFrame={this.state.timeFrame}
                            // openValue={Math.max(this.state["1D"].open_value)}
                            // change={this.state.change}
                            // changePercent={this.state.changePercent}
                            // tF={tF}
                            />

                            <div className="time-frame-buttons">{tF}</div>
                        </div>
                        {/* <h1>Portfolio</h1><br/><br/>
                        <ul className="portfolio-table">
                                <li><h3>Total stock value:</h3></li>
                                <li><h3 className="margin-auto"> ${this.state.total.toFixed(2)}</h3></li>
                    
                                <li><h3>Cash balance:</h3></li>
                                <li><h3 className="margin-auto"> ${this.state.balance.toFixed(2)}</h3></li>
                    
                                <li><h3>Total Account value:</h3></li>
                                <li><h3 className="margin-auto"> ${(this.state.total + this.state.balance).toFixed(2)}</h3></li>
                        </ul> */}
                    
                    </div>
                    <Watchlist/>

                </div>
            )
        }
        else{
            return <div></div>
        }
    }
};

export default Stock;