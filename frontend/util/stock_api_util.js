const myApiKey = "pk_63c661b96d8f4a3aab7b9579b1ac3cdd";

export const fetchStock = (ticker) => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/company/?token=${myApiKey}`
    })
);

export const fetchStocks = () => (
    $.ajax({
        url: 'api/stocks'
    })
);

export const fetchStockDailyData = ticker => (
    $.ajax({
        method: 'get',
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/chart/5y/?token=${myApiKey}`
    })
);

export const fetchStockIntradayData = ticker => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${ticker}/intraday-prices/?token=${myApiKey}`
    })
);

export const fetchStockNews = ticker => (
    $.ajax({
        url: `https://newsapi.org/v2/everything?q=${ticker}&sortBy=publishedAt&apiKey=${myApisKey}&language=en&domains=wsj.com,nytimes.com,seekingalpha.com,yahoo.com`
    })
);

export const fetchStockInfo = ticker => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/aapl/stats?token=${myApiKey}`
    })
);

export const fetchStockInfo2 = ticker => (
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/aapl/batch?types=quote&token=${myApiKey}`
    })
);