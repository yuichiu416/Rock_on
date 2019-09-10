import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

class TransactionBox extends Component {
    render() {
        return (
            <Paper className="transaction-box">
                <Table>
                    <thead>
                        <tr className="transaction-box-header">
                            <th>#</th>
                            <th>Stock Symbol</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
            </Paper>
        );
    }
}
export default TransactionBox;