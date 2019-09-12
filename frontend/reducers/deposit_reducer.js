import { RECEIVE_DEPOSIT, RECEIVE_DEPOSITS } from '../actions/stock_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DEPOSIT:
            return Object.assign({}, {deposit: action.deposit});
        case RECEIVE_DEPOSITS:
            return Object.assign({}, {deposit: Object.values(action.deposits).map(info => info.amount)});            
        default:
            return state;
    }
}