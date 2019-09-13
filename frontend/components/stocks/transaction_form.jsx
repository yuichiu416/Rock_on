import React, { Component } from 'react';
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
            shares: this.props.shares,
            hint: "",
            balance: this.props.balance,
            available_shares: 0
        };
        const user_id = this.props.currentUser.id;
        const ticker = this.props.match.params.ticker;
        this.selectTab = this.selectTab.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.fetchTransactions(user_id).then(() => this.calculateBalance(this.props.deposits.deposit));
        this.props.getAllStockInfo(user_id, ticker).then(() => this.calculateShares(this.props.transactions.transactions));
    }
    selectTab(num){
        this.setState({selected : num});
    }
    handleInput(e){
        const val = e.currentTarget.value
        this.setState({ shares: val, cost: val * this.props.price });
    }
    calculateBalance(deposits) {
        if (deposits.length < 1)
            return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
    }
    calculateShares(transactions) {
        if (transactions.length < 1)
            return;
        this.setState({ available_shares: transactions.reduce((a, b) => a + b) });
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
            this.setState({ balance: this.state.balance + amount, shares: 0, cost: 0, available_shares: shares});
        } else{ // sell
            this.props.makeDeposit({ amount: amount});
            this.props.buyStock({ price: price, num_shares: shares * -1, ticker: ticker });
            this.setState({ balance: this.state.balance + amount, shares: 0, cost: 0, available_shares: this.state.available_shares - shares});
        }
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
                    <span className="left-label">Shares:</span>
                    <input className="share-input" type="text" placeholder="0" value={this.state.shares} onChange={this.handleInput} />
                </div>
                <div className="item3">
                    <label className="market-price">
                        Market Price:
                    </label>
                    <span className="market-price-value">${this.props.price}</span>
                </div>
                <div className="item4">
                    <label className="estimated">{this.props.tabs[this.state.selected].credit}:</label>
                    <span className="estimated-value">${this.state.cost}</span>
                </div>
                <div className="item5">
                    <input type="submit" className="review-order-btn " value="Review Order" />
                </div>
                <div className="item6">
                    <span className="product-hint">{text}</span>
                </div>
            </form>
        );
    }
};