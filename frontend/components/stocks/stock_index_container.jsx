import { connect } from 'react-redux';
import StockIndex from './stock_index';
import { fetchTransactions, getAllStocksHaving } from "../../actions/stock_actions";


const mapStateToProps = (state) => {
    return {
      balance: state.balance,
      shares: 0,
      currentUser: state.session.currentUser,
      deposits: state.entities.deposits,
      transactions: state.entities.transactions,
      portfolio: state.entities.transactions.portfolio
    };
};

const mapDispatchToProps = dispatch => ({
  fetchTransactions: user_id => dispatch(fetchTransactions(user_id)),
  getAllStocksHaving: user_id => dispatch(getAllStocksHaving(user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);