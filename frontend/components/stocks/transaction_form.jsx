import React, { Component } from 'react';
import { calculateBalance , calculateShares } from '../../util/number_util';
class Header extends Component{
    render() {
        const selected = this.props.selected;
        const headers = this.props.tabs.map((tab, idx) => {
            const title = tab.title;
            const cName = idx === selected ? "buy-sell-selected" : '';
            return (
                <span
                    key={idx}
                    className={cName}
                    onClick = {() => this.props.onTabChosen(idx)}>
                    <p>{title}</p>{' '}
                </span>
            );
        });
        return (
            <div className="tab-header">{headers}</div>
        );
    }
};
export default class TransactionForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0,
            cost: 0, 
            shares: props.shares,
            hint: "",
            balance: props.balance,
            available_shares: 0
        };
        const user_id = props.currentUser.id;
        const ticker = props.match.params.ticker;
        this.selectTab = this.selectTab.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.calculateBalance = calculateBalance;
        this.calculateShares = calculateShares;
        this.handleFreeDeposit = this.handleFreeDeposit.bind(this);
        props.fetchTransactions(user_id).then(() => 
            this.calculateBalance(props.deposits.deposit)).then(balance =>
                this.setState({balance: balance}));
        props.getAllStockInfo(user_id, ticker).then(() => 
            this.calculateShares(props.transactions.transactions)).then(available_shares => 
                this.setState({available_shares: available_shares}));
    }
    selectTab(num){
        this.setState({selected : num});
    }
    handleInput(e){
        const val = e.currentTarget.value
        this.setState({ shares: val, cost: val * this.props.price });
    }
  
    handleSubmit(e){
        e.preventDefault();
        const ticker = this.props.match.params.ticker;
        const price = this.props.price;
        const shares = this.state.shares;
        const selected = this.state.selected;
        const available_shares = this.state.available_shares
        let amount = this.state.cost;
        if(shares === 0){
            alert("Share amount can't be 0!");
        } else if (selected === 0 && (amount > this.state.balance)){
            alert("Not enough balance");
            this.setState({shares: 0});
        } else if (selected === 1 && (available_shares < shares || available_shares === 0)){
            alert("Not enough shares to sell");
            this.setState({ shares: 0 });
        } else if(selected === 0){ // buy
            amount *= -1;
            this.props.makeDeposit({amount: amount});
            this.props.buyStock({price: price, num_shares: shares, ticker: ticker});
            this.setState({ balance: this.state.balance + amount, shares: 0, cost: 0, available_shares: parseInt(this.state.available_shares) + parseInt(shares)});
        } else{ // sell
            this.props.makeDeposit({ amount: amount});
            this.props.buyStock({ price: price, num_shares: shares * -1, ticker: ticker });
            this.setState({ balance: this.state.balance + amount, shares: 0, cost: 0, available_shares: parseInt(this.state.available_shares) - parseInt(shares)});
        }
    }
    handleFreeDeposit(e){
        e.preventDefault();
        this.props.makeDeposit({ amount: 1000 });
        this.setState({ balance: this.state.balance + 1000 });
    }
    render() {
        const tabIdx = this.state.selected;
        let text;
        if(tabIdx === 0){
            if(typeof(this.state.balance) === "number")
                text = `${this.state.balance.toFixed(2)} ${this.props.tabs[tabIdx].hint}`;
        } else{
            text = `${this.state.available_shares} ${this.props.tabs[tabIdx].hint}`;
        }
        return (
            <form className="transaction-form" onSubmit={this.handleSubmit}>
                <div className="item1">
                    <Header selected={this.state.selected}
                        onTabChosen={this.selectTab}
                        tabs={this.props.tabs} />
                </div>
                <div className="item2">
                    <span className="left-label margin-left-20px">Shares:</span>
                    <input className="margin-right-20px share-input" type="text" placeholder="0" value={this.state.shares} onChange={this.handleInput} />
                </div>
                <div className="item3">
                    <label className="market-price margin-left-20px">
                        Market Price:
                    </label>
                    <span className="market-price-value margin-right-20px">${this.props.price}</span>
                </div>
                <div className="item4">
                    <label className="estimated margin-left-20px">{this.props.tabs[this.state.selected].credit}:</label>
                    <span className="estimated-value margin-right-20px">${this.state.cost.toFixed(2)}</span>
                </div>
                <div className="item5">
                    <input type="submit" className="green-btn margin-auto" value="Submit Order" />
                </div>
                <div className="item6">
                    <span className="margin-auto color-red">{text}</span>
                </div>
                <div className="item7">
                    <button onClick={this.handleFreeDeposit} className="green-btn margin-auto">Deposit $1000 for FREE</button>
                </div>
            </form>
        );
    }
};