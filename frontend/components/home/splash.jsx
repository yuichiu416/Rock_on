import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class Splash extends Component {
    constructor(props){
        super(props);
        this.handleClickDisclosure = this.handleClickDisclosure.bind(this);
        this.state = { showDisclosureText: false };
    }
    handleClickDisclosure(e){
        this.setState({ showDisclosureText: !this.state.showDisclosureText });
    }
    render() {
        return (
            <div className="panes">
                <div className="pane1">
                    <div className="left">
                        <h1 className="heading1 bounceInRight animated">Invest, <br />Commission-Free</h1>
                        <p className="paragraph1 bounceInRight animated delay-1s">Invest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
                        <p className="disclosure bounceInRight animated delay-2s" onClick={this.handleClickDisclosure}>Commissions Disclosure </p>
                        <Link to="/signup" className="green-btn position-absolute margin-top-20px bounceInRight animated delay-3s" >Sign Up</Link>
                    </div>
                    <div className="right">
                        <img className="pane1-img" src="https://cdn.robinhood.com/assets-about/a4a80e964c803ddb7a9fc7459e0eac01.png" />
                    </div>
                    <div className={this.state.showDisclosureText ? "hidable display-flex" : "hidable"}>
                        <p>Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities placed online. Keep in mind, relevant SEC & FINRA fees may apply. Please see Robinhood’s Commission and Fee Schedule to learn more.</p>
                    </div>
                </div>
                <img className="banner2" src="/images/banner2.png" alt="banner2" />
            </div>
        )
    }
};