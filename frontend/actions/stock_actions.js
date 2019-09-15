import { fetchStockCompany, 
    fetchStockStats,
    fetchStockPrice,
} from '../util/stock_api_util';
import { postDeposit, showAllDeposits, postTransaction, getTransactions, getAllTransactions} from '../util/deposit_util';

export const RECEIVE_STOCK_COMPANY = 'RECEIVE_STOCK_COMPANY';
export const RECEIVE_STOCK_STATS = 'RECEIVE_STOCK_STATS';
export const RECEIVE_DEPOSIT = "RECEIVE_DEPOSIT";
export const RECEIVE_DEPOSITS = "RECEIVE_DEPOSITS";
export const RECEIVE_STOCK_PRICE = "RECEIVE_STOCK_PRICE";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_ALL_TRANSACTIONS = "RECEIVE_ALL_TRANSACTIONS";

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
});
const receiveTransactions = transactions => ({
    type: RECEIVE_TRANSACTIONS,
    transactions
});
const receiveAllTransactions = transactions => ({
    type: RECEIVE_ALL_TRANSACTIONS,
    transactions
});
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
});

export const getStockPrice = ticker => dispatch => {
    return fetchStockPrice(ticker).then(stock => dispatch(receiveStockPrice(stock)))
};

export const buyStock = amount => dispatch => (
    postTransaction(amount).then(transaction => 
        dispatch(receiveTransaction(transaction)))
);
export const getAllStockInfo = (user_id, ticker) => dispatch => (
    getTransactions(user_id, ticker).then(transactions =>
        dispatch(receiveTransactions(transactions)))
);
export const getAllStocksHaving = user_id => dispatch =>
    getAllTransactions(user_id).then(transactions =>
        dispatch(receiveAllTransactions(transactions))
);

export const makeDeposit = amount => dispatch => (
    postDeposit(amount).then(deposit => 
        dispatch(receiveDeposit(deposit)))
);
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