import { connect } from 'react-redux';
import StockShow from './stock_show';
import { logout } from '../../actions/session_actions';
import { fetchStock } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {
    let stock;
    if(!ownProps.match){
        stock = undefined;
    }
    else
        stock = state.entities.stocks[ownProps.match.params.ticker];
    
    return {
        stock: stock,
        currentUser: state.session.currentUser,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => ({
    fetchStock: ticker => dispatch(fetchStock(ticker)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(StockShow);