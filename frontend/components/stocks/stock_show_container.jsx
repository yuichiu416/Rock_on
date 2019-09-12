import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';
import { fetchStock, fetchStockStatistics, fetchTransactions, getStockPrice } from '../../actions/stock_actions';
import { withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const ticker = ownProps.match.params.ticker;
    return {
        stock: state.entities.stocks[ticker],
        stats: state.entities.stats,
        price: state.entities.price.price,
        deposits: state.entities.deposits,
        currentUser: state.session.currentUser,
        ticker: ticker,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStock: ticker => dispatch(fetchStock(ticker)),
    fetchStockStatistics: ticker => dispatch(fetchStockStatistics(ticker)),
    getStockPrice: ticker => dispatch(getStockPrice(ticker)),
    fetchTransactions: id => dispatch(fetchTransactions(id)),
    logout: () => dispatch(logout())
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));