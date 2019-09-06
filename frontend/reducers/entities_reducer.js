import { combineReducers } from 'redux';
import stocksReducer from './stocks_reducer';

const entitiesReducer = combineReducers({
    stocks: stocksReducer,
});

export default entitiesReducer;