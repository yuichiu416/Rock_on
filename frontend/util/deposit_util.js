export const postDeposit = (deposit) => {
    return $.ajax({
        url: '/deposits',
        method: 'POST',
        data: { deposit }
    });
};


export const showAllDeposits = ( user_id ) => {
    return $.ajax({
        url: `/deposits/${user_id}`,
        method: 'GET'
    });
};

export const postTransaction = transaction => {
    return $.ajax({
        url: `/transactions`,
        method: 'POST',
        data: { transaction }
    });
};
export const getTransactions = (user_id, ticker) => {
    return $.ajax({
        url: `/transactions/${user_id}?ticker=${ticker}`,
        method: 'GET'
    });
};