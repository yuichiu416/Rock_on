import { combineReducers } from 'redux';
import stocksReducer from './stocks_reducer';
import depositReducer from './deposit_reducer';
import statsReducer from './stats_reducer';
import priceReducer from './price_reducer';

const entitiesReducer = combineReducers({
    stocks: stocksReducer,
    deposits: depositReducer,
    stats: statsReducer,
    price: priceReducer
});

export default entitiesReducer;