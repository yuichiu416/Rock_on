export const handleBigNum = (num) => {
    num = parseInt(num);
    if(num >= 100000000)
        return (num / 1000000000).toFixed(2) + "B";
    else if(num >= 1000000)
        return (num / 1000000).toFixed(2) + "M";
    else if(num >= 1000)
        return (num / 1000).toFixed(2) + "K";
};