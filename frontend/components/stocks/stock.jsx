import React, { Component } from 'react'

class Stock extends Component {
    constructor(props){
        super(props)
    }
    render() {
        this.props.fetchStock("MSFT");
        return (
            <div id="stock">
                Stock goes here
            </div>
        )
    }
}
export default Stock;