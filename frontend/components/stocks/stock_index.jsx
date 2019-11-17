import React, { Component } from 'react';
import Watchlist from './watchlist';
import { Link } from 'react-router-dom';
import PortfolioChart from '../home/portfolio_chart';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0, 
            stocks: [], 
            balance: 0,
            "1D": [],
            "5D": [],
            "1M": [],
            "3M": [],
            "1Y": [],
            "5Y": [],
            timeFrame: "1D",
        }
        this.generateData = this.generateData.bind(this);
        this.handlePortfolio = this.handlePortfolio.bind(this);
        this.updatePrices = this.updatePrices.bind(this);
        this.calculateBalance = this.calculateBalance.bind(this);
    }
    
    componentDidMount(){
        const user_id = this.props.currentUser.id;
        this.props.fetchTransactions(user_id).then(() => this.calculateBalance(this.props.deposits.deposit));
        this.props.getAllStocksHaving(user_id).then(() => this.handlePortfolio());
        this.generateData();
    }

    calculateBalance(deposits) {
        if (!deposits || deposits.length < 1)
        return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
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

    generateData() {
        let data = [];
        var current = new Date();
        this.current = current;
        var yesterday = new Date(current - 86400000);
        var value = 100000;
        var yesterdayVal = this.valueChange(value);

        while (data.length < 3650) {
            data.push({ date: yesterday, value: this.valueChange(value) });
            current = yesterday;
            yesterdayVal = value;
            value = this.valueChange(yesterdayVal);
            yesterday = new Date(current - 86400000);
        }
        this.data = data;
        this.setState({ data: data });
    }

    valueChange(val) {
        let random = Math.random() * 0.1;
        return (1.0501 - random) * val;
    }

    updatePrices(timeFrame) { // CLICKED TIMEFRAME CALC
        var data = [];
        var current = this.current;
        var last;
        if (timeFrame === '1D') {
            for(let i = 0; i < 180; i++){
                let datum = this.data[i];
                last = new Date(current - 4800);
                data.push({ date: last, value: datum.value });
                current = last;
            }
            this.setState({ data: data });
        } else if(timeFrame === "5D"){
            for (let i = 200; i < 600; i++) {
                let datum = this.data[i];
                last = new Date(current - 24000);
                data.push({ date: last, value: datum.value });
                current = last;
            }
            this.setState({ data: data });
        } else if(timeFrame === "1M"){
            for (let i = 550; i < 1280; i++) {
                let datum = this.data[i];
                last = new Date(current - 144000);
                data.push({ date: last, value: datum.value });
                current = last;
            }
            this.setState({ data: data });
        } else if (timeFrame === "3M") {
            for (let i = 280; i < 880; i++) {
                let datum = this.data[i];
                last = new Date(current - 432000);
                data.push({ date: last, value: datum.value });
                current = last;
            }
            this.setState({ data: data });
        } else if(timeFrame === "1Y") {
            for (let i = 0; i < 1820; i++) {
                let datum = this.data[i];
                last = new Date(current - 1728000);
                data.push({ date: last, value: datum.value });
                current = last;
            }
            this.setState({ data: data });
        } else{
            this.setState({ data: this.data })
        }
    }

    dailyVal() {
        this.setState({ data: this.data});
    }
    render() {
        const tF = Object.keys(this.state).map(key => {
            if (key === "1D" || key === "5D" || key === "1M" || key === "3M" || key === "1Y" || key === "5Y") {
                return <button className="btns" key={`${key}-id`} onClick={() => { this.updatePrices(key) }}>
                    {key.slice(0, 2).toUpperCase()}
                </button>
            }
        })

        if (this.state.data) {
            return (
                <div className="stock">
                    <div className="portfolio">
                        <div className="chart-wrap">
                            <PortfolioChart
                                portfolioValue={this.state.data}
                                tfVal={this.state[this.state.timeFrame]}
                                timeFrame={this.state.timeFrame}
                                openValue={Math.max(this.state["1D"].open_value)}
                                change={this.state.change}
                                changePercent={this.state.changePercent}
                                tF={tF}
                            />
                            <div className="time-frame-buttons">{tF}</div>
                        </div>
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