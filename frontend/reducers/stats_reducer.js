import { RECEIVE_STOCK_STATS } from '../actions/stock_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STOCK_STATS:
            let stats = action.stats;
            return Object.assign({}, {
                stats: {
                    marketcap: stats.marketcap,
                    employees: stats.employees,
                    peRatio: stats.peRatio,
                    dividendYield: stats.dividendYield,
                    week52high: stats.week52high,
                    week52low: stats.week52low,
                }
            });
        default:
            return state;
    }
};