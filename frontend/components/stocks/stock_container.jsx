import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_actions';
import { logout } from '../../actions/session_actions';
import Stock from './stock';

const masStateToProps = state => ({
    stocks: state.entities.stocks
});
const mapDispatchToProps = dispatch => ({
    fetchStock: ticker => dispatch(fetchStock(ticker)),
    logout: () => dispatch(logout()),
});

export default connect(masStateToProps, mapDispatchToProps)(Stock);
