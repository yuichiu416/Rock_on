import { RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS } from '../actions/stock_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            return Object.assign({}, { transaction: action.transaction });
        case RECEIVE_TRANSACTIONS:
            return Object.assign({}, {transactions: Object.values(action.transactions).map(info => (info.num_shares))});
        default:
            return state;
    }
};