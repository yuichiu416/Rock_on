import { connect } from 'react-redux';
import StockIndex from './stock_index';
import { logout } from '../../actions/session_actions';
const mapStateToProps = (state) => {
    return {
        currentUser: state.session.currentUser,
        errors: state.errors,
        deposits: state.entities.deposits
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);