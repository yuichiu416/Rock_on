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
            price: 0, 
            credit: 0,
            shares: 0,
            hint: ""
        };
        this.selectTab = this.selectTab.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    selectTab(num){
        this.setState({selected : num});
    }
    handleInput(e){
        this.setState({ shares: e.currentTarget.value });
    }

    render() {
        return (
            <form className="transaction-form">
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
                    <span className="market-price-value">${this.state.price}</span>
                </div>
                <div className="item4">
                    <label className="estimated">
                        {this.props.tabs[this.state.selected].credit}:
                    </label>
                    <span className="estimated-value">${this.state.credit}</span>
                </div>
                <div className="item5">
                    <input type="submit" className="review-order-btn " value="Review Order" />
                </div>
                <div className="item6">
                    <span className="product-hint">${`1000`} {this.props.tabs[this.state.selected].hint}</span>
                </div>
            </form>
        );
    }
};