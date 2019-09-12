import { fetchStockCompany, 
    fetchStockStats,
    fetchStockPrice
} from '../util/stock_api_util';
import { postDeposit, showAllDeposits} from '../util/deposit_util';

export const RECEIVE_STOCK_COMPANY = 'RECEIVE_STOCK_COMPANY';
export const RECEIVE_STOCK_STATS = 'RECEIVE_STOCK_STATS';
export const RECEIVE_DEPOSIT = "RECEIVE_DEPOSIT";
export const RECEIVE_DEPOSITS = "RECEIVE_DEPOSITS";
export const RECEIVE_STOCK_PRICE = "RECEIVE_STOCK_PRICE";

const receiveDeposit = deposit => ({
    type: RECEIVE_DEPOSIT,
    deposit
});
const receiveDeposits = deposits => ({
    type: RECEIVE_DEPOSITS,
    deposits
});
const receiveStockCompany = (ticker, stock) => ({
    type: RECEIVE_STOCK_COMPANY,
    ticker,
    stock
});
const receiveStockStats = (ticker, stats) => ({
    type: RECEIVE_STOCK_STATS,
    ticker,
    stats
});
const receiveStockPrice = (stock) => ({
    type: RECEIVE_STOCK_PRICE,
    stock
})

export const getStockPrice = ticker => dispatch => (
    fetchStockPrice(ticker).then(stock => dispatch(receiveStockPrice(stock)))
);
export const makeDeposit = amount => dispatch => {
    postDeposit(amount).then(deposit => 
        dispatch(receiveDeposit(deposit)))
};
export const fetchTransactions = user_id => dispatch => (
    showAllDeposits(user_id).then(deposits => 
        dispatch(receiveDeposits(deposits)))
);
export const fetchStock = ticker => dispatch => (
    fetchStockCompany(ticker).then( stock =>
        dispatch(receiveStockCompany(ticker, stock)))
);
export const fetchStockStatistics = ticker => dispatch => (
    fetchStockStats(ticker).then(stats => 
        dispatch(receiveStockStats(ticker, stats)))
);