import {
  RECEIVE_TRANSACTION,
  RECEIVE_TRANSACTIONS,
  RECEIVE_ALL_TRANSACTIONS
} from "../actions/stock_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            return Object.assign({}, { transaction: action.transaction });
        case RECEIVE_TRANSACTIONS:
            return Object.assign({}, {transactions: Object.values(action.transactions).map(info => (info.num_shares))});
        case RECEIVE_ALL_TRANSACTIONS:
            const portfolio = {};
                Object.values(action.transactions).map(info => {
                    portfolio[info.ticker] = portfolio[info.ticker] || [];
                    portfolio[info.ticker].push({price: info.price, num_shares: info.num_shares});
                    return ;
                });
            return Object.assign({}, {portfolio: portfolio});
        default:
            return state;
    }
};