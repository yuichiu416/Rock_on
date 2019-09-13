import { combineReducers } from 'redux';
import stocksReducer from './stocks_reducer';
import depositReducer from './deposit_reducer';
import statsReducer from './stats_reducer';
import priceReducer from './price_reducer';
import transactionReducer from './transaction_reducer';

const entitiesReducer = combineReducers({
    stocks: stocksReducer,
    deposits: depositReducer,
    stats: statsReducer,
    price: priceReducer,
    transactions: transactionReducer
});

export default entitiesReducer;