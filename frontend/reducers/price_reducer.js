import { RECEIVE_STOCK_PRICE } from '../actions/stock_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STOCK_PRICE:
            return Object.assign({}, { price: action.stock[0].lastSalePrice });
        default:
            return state;
    }
};