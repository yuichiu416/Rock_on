import { RECEIVE_STOCK_COMPANY, RECEIVE_STOCKS, RECEIVE_STOCK_STATS } from '../actions/stock_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_STOCK_COMPANY:
            let stock = action.stock;
            return Object.assign({}, {
                [stock.symbol]:{
                    companyName: stock.companyName,
                    exchange: stock.exchange,
                    industry: stock.industry,
                    website: stock.website,
                    description: stock.description,
                    CEO: stock.CEO,
                    securityName: stock.securityName,
                    issueType: stock.issueType,
                    section: stock.sector,
                    employees: stock.employees,
                    tags: stock.tags,
                    address: stock.address,
                    address2: stock.address2,
                    state: stock.state,
                    city: stock.city,
                    zip: stock.zip,
                    country: stock.country,
                    phone: stock.phone
                }
            });
        case RECEIVE_STOCKS:
            return Object.assign({}, action.stocks);
        case RECEIVE_STOCK_STATS:
            let stats = action.stats;
            return Object.assign({}, {
                [action.ticker]: {
                    marketcap: stats.marketcap,
                    employees: stats.employees,
                    peRatio: stats.peRatio,
                    // website: stats.website,
                    // description: stats.description,
                    // CEO: stats.CEO,
                    // securityName: stats.securityName,
                    // issueType: stats.issueType,
                    // section: stats.sector,
                    // employees: stats.employees,
                    // tags: stats.tags,
                    // address: stats.address,
                    // address2: stats.address2,
                    // state: stats.state,
                    // city: stats.city,
                    // zip: stats.zip,
                    // country: stats.country,
                    // phone: stats.phone
                }
            });
        default:
            return state;
    }
}