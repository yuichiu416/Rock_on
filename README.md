# Rock_on
A full-stack project

State Shape template
```
{
    entities: {
        stocks: {
            1: {
                id: 1,
                name: "AMD",
                owned_shares: 33,
                current_price: 30.46,
                change: 2.51
            },
            2: {
                id: 2,
                name: "MSFT",
                owned_shares: 0,
                current_price: 135.50,
                change: -1.2
            }
        },
        user: {
            id: 11,
            username: "roger",    
            imgUrl: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
        },
        watchlist: {
            id: 1,
            user_id: 1,
            stock_ids: [2, 3, 42, 89],
        },
    },
    ui: {
        loading: true/false
    },
    errors: {
        login: ["Incorrect username/password combination"],
        buying: ["Amount can't be 0"],
        selling: ["Amount can't be 0"],
        searching: ["The stock doesn't exist"]
    },
    session: { currentUserId: 25 }
}
```