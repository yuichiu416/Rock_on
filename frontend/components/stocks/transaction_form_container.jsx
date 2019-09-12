import { connect } from 'react-redux';
import TransactionForm from './transaction_form';
import { withRouter } from 'react-router';
import { makeDeposit } from '../../actions/stock_actions';
import { fetchTransactions } from '../../actions/stock_actions';


const mapStateToProps = (state) => {
    console.log(state);
    return {
        balance: state.balance,
        shares: 0,
        currentUser: state.session.currentUser,
        deposits: state.entities.deposits,
    };
};

const mapDispatchToProps = dispatch => ({
    makeDeposit: deposit => dispatch(makeDeposit(deposit)),
    fetchTransactions: id => dispatch(fetchTransactions(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransactionForm));