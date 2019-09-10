import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

export const stockList = [
    "MSFT",
    "AMD",
    "DIS",
    "INTC",
    "TSLA",
    "NVDA",
    "AAPL",
    "SQ",
    "GPRO",
    "SNAP",
    "FB",
    "AMZN",
    "BAC",
    "NFLX",
    "UBER",
    "TWTR",
    "FIT",
    "BABA",
    "ZNGA",
    "CHK",
    "NIO",
    "T",
    "APHA",
    "S",
    "ATVI",
    "KO",
    "LYFT",
    "V",
    "IQ",
    "PYPL",
    "SPY",
    "CSCO",
    "TECHY",
    "CRM",
    "F"
];

class Watchlist extends Component{
    render(){
        const trs = stockList.map((ticker, idx) => {
            return (
                <tr key={ticker}>
                    <td>{idx}</td>
                    <td><Link to={`/stocks/${ticker}`}>{ticker}</Link></td>
                </tr>
            );
        });

        return (
            <Paper className="watchlist">
                <Table>
                    <thead>
                        <tr className="watchlist-header">
                            <th>#</th>
                            <th>Stock Symbol</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </Table>
            </Paper>
        );
    }
}
export default Watchlist;