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
