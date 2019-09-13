import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';
import { fetchStock, fetchStockStatistics, getStockPrice } from '../../actions/stock_actions';
import { withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {
    const ticker = ownProps.match.params.ticker;
    return {
        stock: state.entities.stocks[ticker],
        stats: state.entities.stats.stats,
        price: state.entities.price.price,
        currentUser: state.session.currentUser,
        ticker: ticker,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStock: ticker => dispatch(fetchStock(ticker)),
    fetchStockStatistics: ticker => dispatch(fetchStockStatistics(ticker)),
    getStockPrice: ticker => dispatch(getStockPrice(ticker)),
    logout: () => dispatch(logout())
});

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(StockShow));