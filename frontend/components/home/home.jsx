import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Chunk1 from './chunk1';

export default class Home extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const { currentUser, logout } = this.props
        return (
            <div>
                <NavBar currentUser={currentUser} logout={logout} />
                <Chunk1 />
            </div>
        )
    }
}
