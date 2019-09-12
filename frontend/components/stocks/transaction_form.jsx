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
            balance: this.props.balance
        };
        this.selectTab = this.selectTab.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.props.fetchTransactions(this.props.currentUser.id).then(() => this.calculateBalance(this.props.deposits.deposit));
    }
    selectTab(num){
        this.setState({selected : num});
    }
    handleInput(e){
        const val = e.currentTarget.value
        this.setState({ shares: val, cost: val * this.props.price });
    }
    calculateBalance(deposits) {
        if (!deposits)
            return;
        this.setState({ balance: deposits.reduce((a, b) => a + b) });
    }
    handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        if (this.state.cost > this.props.balance)
            alert("Not enough balance");
        else{
            const amount = this.state.cost * -1;
            this.props.makeDeposit({amount: amount});
            this.setState({balance: this.state.balance - amount});
        }
    }
    render() {
        const balance_shares_text = this.props.tabs[this.state.selected].hint;
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
                    <span className="product-hint">${this.state.balance} {balance_shares_text}</span>
                </div>
            </form>
        );
    }
};