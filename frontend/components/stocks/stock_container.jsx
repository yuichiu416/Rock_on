import { connect } from 'react-redux';
import { fetchStock } from '../../actions/stock_actions';
import Stock from './stock';


const masStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
    fetchStock: ticker => dispatch(fetchStock(ticker)),
});

export default connect(masStateToProps, mapDispatchToProps)(Stock);
