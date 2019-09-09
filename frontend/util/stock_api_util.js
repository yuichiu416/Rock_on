const myApiKey = "pk_63c661b96d8f4a3aab7b9579b1ac3cdd";

export const fetchStockCompany = (ticker) => {
    return $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${myApiKey}`
    });
};

export const fetchStocks = () => (
    $.ajax({
        url: 'stocks'
    })
);

export const fetchStockStats = ticker => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/stats/?token=${myApiKey}`
    })
);