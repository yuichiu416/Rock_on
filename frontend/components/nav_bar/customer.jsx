
import React from 'react';
import { Link } from 'react-router-dom';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import SearchIcon from '@material-ui/icons/Search';

export default (props) => {
    return (
        <div className="display-block">
            <header>
                <div className="header-nav-logo">
                    <Link to="/"><img src="/images/logo.png" alt="logo" /></Link>
                </div>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <div className="tail">
                    <ul className="nav__links">
                        <li><Link to="/free_stock">Free Stock</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link>Notifications</Link></li>
                        <li><Link to="/account">Account</Link></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
