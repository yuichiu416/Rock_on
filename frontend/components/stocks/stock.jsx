import React, { Component } from 'react'

class Stock extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchStock("MSFT").then(stocks => this.setState(stocks));
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