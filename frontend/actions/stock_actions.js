import { fetchStockCompany, 
    fetchStocks, 
    fetchStockStats 
} from '../util/stock_api_util';

export const RECEIVE_STOCK_COMPANY = 'RECEIVE_STOCK_COMPANY';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const RECEIVE_STOCK_STATS = 'RECEIVE_STOCK_STATS';


const receiveStockCompany = stock => ({
    type: RECEIVE_STOCK_COMPANY,
    stock
});

const receiveStocks = stocks => ({
    type: RECEIVE_STOCK,
    stocks
});

const receiveStockStats = (ticker, stats) => ({
    type: RECEIVE_STOCK_STATS,
    ticker,
    stats
});

export const fetchStock = ticker => dispatch => (
    fetchStockCompany(ticker).then( stock =>
        dispatch(receiveStockCompany(stock)))
);

// export const fetchStocks = () => dispatch => {
//     fetchStocks().then(stocks => dispatch(receiveStocks(stocks)));
// };

// export const fetchStockStats = (ticker) => {
//     fetchStockStats.}