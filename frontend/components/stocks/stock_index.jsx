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
            "5dm": [],
            "1mm": [],
            "3M": [],
            "1Y": [],
            "5Y": [],
            fetched: false,
            timeFrame: "1D",
            tickerSymbol: "",
            openValue: null,
            closeValue: null,
            change: 0,
            changePercent: 0
        }
        this.generateData = this.generateData.bind(this);
        this.handlePortfolio = this.handlePortfolio.bind(this);
        this.updatePrices = this.updatePrices.bind(this);
        this.dailyVal = this.dailyVal.bind(this);
    }
    
    calculateBalance(deposits) {
        if (!deposits || deposits.length < 1)
        return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
    }
    componentDidMount(){
        const user_id = this.props.currentUser.id;
        this.props.fetchTransactions(user_id).then(() => this.calculateBalance(this.props.deposits.deposit));
        this.props.getAllStocksHaving(user_id).then(() => this.handlePortfolio());
        this.generateData();
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
        var yesterday = new Date(current - 86400000);
        var value = 100000;
        var yesterdayVal = this.valueChange(value);

        while (data.length < 1900) {
            data.push({ date: yesterday, value: this.valueChange(value) });
            current = yesterday;
            yesterdayVal = value;
            value = this.valueChange(yesterdayVal);
            yesterday = new Date(current - 86400000);
        }
        this.setState({ data: data });
    }

    valueChange(val) {
        let decrease = Math.floor(Math.random() * 10) % 2 === 0 && Math.floor(Math.random() * 10) % 3 === 0;
        let rate = 1;
        if (decrease)
            rate *= -1;
        return (1 + rate * Math.random() / 100) * val;
    }

    updatePrices(timeFrame) { // CLICKED TIMEFRAME CALC
        if (this.state.timeFrame !== timeFrame && timeFrame !== '1D') {

            this.weeklyPrices = {}
            let that = this;
            Object.values(this.props.transactions).forEach((asset, idx) => {

                if (this.props.tickers[asset.ticker_symbol.toUpperCase()]) {
                    const createdAt = new Date(Date.parse(`${asset.created_at}`))//.toLocaleString('en-US')

                    fetchPrices(asset.ticker_symbol, timeFrame).then(prices => {
                        let num_shares = asset.purchase_shares
                        prices.forEach(close_price => {
                            const date = close_price.minute ? new Date(Date.parse(`${close_price.date} ${close_price.minute}`)) : new Date(Date.parse(`${close_price.date}`))//.toLocaleString('en-US')

                            if (date > createdAt && close_price.close !== null) {
                                if (that.weeklyPrices[date.toLocaleString('en-US')] >= 0) {
                                    that.weeklyPrices[date.toLocaleString('en-US')] += close_price.close * num_shares
                                } else {
                                    that.weeklyPrices[date.toLocaleString('en-US')] = (close_price.close * num_shares) + parseFloat(this.props.currentBuyingPower)
                                }
                            }
                        })


                        if (idx === this.props.transactions.length - 1) {
                            const newArr = Object.keys(that.weeklyPrices).map(key => {
                                return { "date": key, "value": that.weeklyPrices[key] }
                            })

                            that.setState({ fetched: true, portfolioValue: newArr })

                        }
                    }).then(this.setState({ timeFrame: timeFrame }))
                }
            })

        } else if (timeFrame === '1D') {
            this.props.fetchTransactions().then(response => {
                this.dailyVal(response)
            }).then(this.setState({ timeFrame: timeFrame }))
        }
        // this.setState({timeFrame: timeFrame})
    }

    dailyVal(response) { // DAILY PORTFOLIO CALC
        let that = this;

        const data = response.transactions.forEach((asset, idx) => {
            if (this.props.tickers[asset.ticker_symbol.toUpperCase()]) {
                const createdAt = new Date(Date.parse(`${asset.created_at}`))//.toLocaleString('en-US')

                fetchDailyPrices(asset.ticker_symbol).then(prices => {
                    let num_shares = asset.purchase_shares
                    prices.forEach(close_price => {
                        const date = new Date(Date.parse(`${close_price.date} ${close_price.minute}`))//.toLocaleString('en-US')

                        if (date > createdAt && close_price.close !== null) {
                            if (that.dailyPrices[date.toLocaleString('en-US')] >= 0) {
                                that.dailyPrices[date.toLocaleString('en-US')] += close_price.close * num_shares
                            } else {
                                that.dailyPrices[date.toLocaleString('en-US')] = (close_price.close * num_shares) + parseFloat(this.props.currentBuyingPower)
                            }
                        }
                    })

                    if (idx === response.transactions.length - 1) {
                        const newArr = Object.keys(that.dailyPrices).map(key => {
                            return { "date": key, "value": that.dailyPrices[key] }
                        })
                        that.setState({ fetched: true, portfolioValue: newArr })

                    }

                })
            }
        })
    }
    render() {
        const tF = Object.keys(this.state).map(key => {
            if (key === "1D" || key === "5dm" || key === "1mm" || key === "3M" || key === "1Y" || key === "ALL") {
                return <button className="btns" key={`${key}-id`} onClick={() => { this.updatePrices(key) }}>
                    {key.slice(0, 2).toUpperCase()}
                </button>
            }
        })

        if (this.state.data) {
            // let data = this.state.portfolioValue.slice().sort((a, b) => {
            //     return Date.parse(a.date) - Date.parse(b.date)
            // }).filter(el => {
            //     return el !== undefined
            // })
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
                        {/* <h1>Portfolio</h1><br/><br/> */}
                        {/* <ul className="portfolio-table">
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