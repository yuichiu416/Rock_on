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
                        <li><a href="#">Investing</a></li>
                        <li><a href="#">Cash Management</a></li>
                        <li><a href="#">Learn</a></li>
                        <li><a href="#">More</a></li>
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
