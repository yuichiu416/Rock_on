import React, { Component } from 'react'

class Stock extends Component {
    constructor(props){
        super(props)
        this.props.fetchStock("MSFT").then(stock => console.log(stock));
        //question1. how to get the stock information from the response?
        //question2. the dive.flex doesn't like any children 
    }

    render() {
        return (
            <div id="stock">
                Stock goes here
            </div>
        )
    }
}
export default Stock;