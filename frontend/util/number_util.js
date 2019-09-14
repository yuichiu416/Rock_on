export const handleBigNum = (num) => {
    num = parseInt(num);
    if(num >= 100000000)
        return (num / 1000000000).toFixed(2) + "B";
    else if(num >= 1000000)
        return (num / 1000000).toFixed(2) + "M";
    else if(num >= 1000)
        return (num / 1000).toFixed(2) + "K";
};

export const calculateBalance = (deposits) => {
    if (deposits.length < 1)
        return;
    return deposits.reduce((a, b) => a + b);
}
export const calculateShares = (transactions) => {
    if (transactions.length < 1)
        return;
    return transactions.reduce((a, b) => a + b);
}