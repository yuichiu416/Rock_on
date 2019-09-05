import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="chunk1">
        <div className="left vertical-flex">
            <h1 className="heading1">Invest, <br/>Commission-Free</h1>
            <p className="paragraph1">Invest in stocks, ETFs, options, and cryptocurrencies, all commission-free, right from your phone or desktop.</p>
            <Link to="/signup" className="button" id="signup" >Sign Up</Link>
            <p className="disclosure">Commissions Disclosure </p>
            <p className="hidable">Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities placed online. Keep in mind, relevant SEC & FINRA fees may apply. Please see Robinhood’s Commission and Fee Schedule to learn more.</p>

        </div>
        <div className="right">
            <img className="chunk1-img" src="https://cdn.robinhood.com/assets-about/a4a80e964c803ddb7a9fc7459e0eac01.png" />
        </div>
    </div>
)
