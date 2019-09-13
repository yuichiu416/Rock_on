import { RECEIVE_STOCK_COMPANY, RECEIVE_STOCKS } from '../actions/stock_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_STOCK_COMPANY:
            let stock = action.stock;
            return Object.assign({}, {
                [action.ticker]:{
                    companyName: stock.companyName,
                    website: stock.website,
                    description: stock.description,
                    CEO: stock.CEO,
                    securityName: stock.securityName,
                    issueType: stock.issueType,
                    section: stock.sector,
                    employees: stock.employees,
                    tags: stock.tags,
                    state: stock.state,
                    city: stock.city,
                    zip: stock.zip
                }
            });
        default:
            return state;
    }
};