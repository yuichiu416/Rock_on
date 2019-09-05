import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="display-block">
            <header>  
                <div className="header-nav-logo">
                    <a href="#"><img src="/images/logo.png" alt="logo" /></a>
                    <a href="#">Robinhood</a>
                </div>
                <nav>
                    <ul className="nav__links">
                        <li><a href="#investing">Investing</a></li>
                        <li><a href="#cash_management">Cash Management</a></li>
                        <li><a href="#learn">Learn</a></li>
                        <li><a href="#more">More</a></li>
                    </ul>
                </nav>
                    <div className="tail">
                        <Link to="/login" >Log In</Link>
                        <Link to="/signup" className="button" id="signup" >Sign Up</Link>
                    </div>
            </header>
        </div>
    )
}
