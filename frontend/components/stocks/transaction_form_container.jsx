import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { withRouter } from 'react-router';
import { makeDeposit } from '../../actions/stock_actions';
import { fetchTransactions, buyStock, getAllStockInfo } from '../../actions/stock_actions';


const mapStateToProps = (state) => {
    return {
        balance: state.balance,
        shares: 0,
        currentUser: state.session.currentUser,
        deposits: state.entities.deposits,
        transactions: state.entities.transactions
    };
};

const mapDispatchToProps = dispatch => ({
    makeDeposit: deposit => dispatch(makeDeposit(deposit)),
    fetchTransactions: id => dispatch(fetchTransactions(id)),
    buyStock: stock => dispatch(buyStock(stock)),
    getAllStockInfo: (user_id, ticker) => dispatch(getAllStockInfo(user_id, ticker))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionForm));