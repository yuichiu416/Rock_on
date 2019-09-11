import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component{
    render() {
        const selected = this.props.selected;
        const headers = this.props.tabs.map((tab, idx) => {
            const title = tab.title;
            const klass = idx === selected ? "active" : '';
            return (
                <li
                    key={idx}
                    className={klass}
                    onClick = {() => this.props.onTabChosen(idx)}>
                    {title}{' '}
                </li>
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
            shares: 0
        };
        this.selectTab = this.selectTab.bind(this);
    }
    selectTab(num){
        this.setState({selected : num});
    }
    updateShares(e){
        console.log(e);
        this.setState({shares: 0});
    }

    render() {
        return (
            <form className="transaction-form">
                <Header selected={this.state.selected}
                    onTabChosen={this.selectTab}
                    tabs={this.props.tabs} />
                <label className="left-label">Shares:</label>
                    <input className="share-input" type="text" value={this.state.price} onChange={this.updateShares}/>
                <br />
                <label>
                    Market Price:{this.state.price}
                </label>
                <br/>
                <label>
                    {this.props.tabs[this.state.selected].credit}:{this.state.credit}
                </label>
            </form>
        );
    }
};

