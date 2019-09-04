import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h3>Welcome {currentUser.username}!</h3>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
            </div>
        );
    return (
        <header>
            <h1 className="logo">ROCKON</h1>
            <div className="navbar" >
                <Navbar.Brand href="#home" className="">Icon</Navbar.Brand>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav className="">
                    <Nav.Link href="#home">Investing</Nav.Link>
                    <Nav.Link href="#features">Cash Management</Nav.Link>
                    <Nav.Link href="#pricing">Learn</Nav.Link>
                    <NavDropdown title="More" expand="false" >
                        <NavDropdown.Item href="#action/3.1">Snacks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Careers</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>
            <div>
                {display}
                sdfsdsfsd
            </div>
        </header>
    )
}
