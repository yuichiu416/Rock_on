import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const rows = [
    "MSFT",
    "AMD",
    "VTI"
];

class Watchlist extends Component{

    render(){
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
                        <tr>
                            <td>1</td>
                            <td><Link to="/stocks/MSFT" >MSFT</Link></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><Link to="/stocks/AMD" >AMD</Link></td>
                           
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><Link to="/stocks/DIS" >DIS</Link></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><Link to="/stocks/INTC" >INTC</Link></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><Link to="/stocks/NVDA" >NVDA</Link></td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td><Link to="/stocks/NTDOY" >NTDOY</Link></td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td><Link to="/stocks/SQ" >SQ</Link></td>
                        </tr>
                    </tbody>
                </Table>
            </Paper>
        );
    }
}
export default Watchlist;