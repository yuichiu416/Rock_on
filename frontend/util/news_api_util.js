
export const fetchNews = () => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=stockmarket&apiKey=03615461ebc74e59a2cea8ff3623e233`
    })
}

export const fetchCompanyNews = (ticker) => {
    return $.ajax({
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${ticker}&apiKey=03615461ebc74e59a2cea8ff3623e233`
    })
}