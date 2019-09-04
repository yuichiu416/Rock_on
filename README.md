# Rock_on
A full-stack project. Clone of [Robinhood](https://robinhood.com/)

The milestones will be updated below

9/2 W15D1
* Finished sign up/sign in functionality and set up some of the backend stuff/views



# Frontend routes
Our components are organized as follows:
* Root
  * App
    * NavBar
    * (main component goes here)
    * Footer

The following routes, defined in `App`, will render components between `NavBar` and `Footer`
* `/`
  * RootNavBar - *Home icon*, *Search bar*, *Free Stock*, *Home*, *Notifications*, *Account*
  * PageContainer
    * ProfileOverviewContainer
      * ProfileOverviewComponent - shows *total value*, *change*, display in *1D*, *1W*, *1M*, *3M*, *1Y*, *ALL*
    * AdComponent - some random ads from our partners
    * PopularCollectionsContainer
      * PopularCollections - top movers
        * PopularCollectionItem - such as *100 Most Popular*, *Technology*
    * TopMoversContainer
      * TopMovers - top 4 items that changed the most
    * NewsContainer
      * NewsComponent - news list
        * NewsItem
    * WatchlistContainer
      * WatchlistComponent - watchlist list
        * WatchlistItem - shows *Name*, *Price*, *Shares* (if applicable) and *Today*

* `/login`
  * PageContainer
    * SessionForm

* `/signup`
  * PageContainer
    * SessionForm

* `/account`
  * PageContainer
    * AccountNavBar - shows *Account*, *Banking*, *History*, *Documents*, *Free Stocks*, *Settings*

    * PortfolioContainer
      * PortfolioComponent
        * PortfolioSummary - *Total Portfolio Value*, *Stocks & Options* and *Cash* value
        * StocksSummary - *Name*, *Symbol*, *Shares*, *Price*, *Average Cost*, *Total Return* and *Equity*
  
  * `/account/banking`
    * PageContainer
      * LinkedAccountContainer
        * LinkedAccountComponent - *credit card info*
      * CompletedTransferContainer
        * CompletedTransferComponent - *account name*, *date* and *amount*
      * DepositFundsContainer
        * DepositFundsComponent - *From* an account *to* another account and *amount*
  * `/account/history`
    * PageContainer
      * RecentTransactionContainer
        * RecentTransactionComponent
      *  OlderTransctionContainer
         *  OlderTransctionComponent
      *  FilterContainer
         *  FilterComponent
  * `/account/documents`
    * PageContainer
      *  DocumentComponent
  * `/account/freestocks`
    * PageContainer
      * Freeestocksmponent
  * `/account/settings*`
    * PageContainer
      * SettingsComponent


* `/stocks/:stockName`
  * PageContainer
    * OwnedStockSummaryComponent if owns any shares
    * AboutComponent - *Your Equity* (total value), *Cost*, *Today's Return*, *Total Return*. *Your Average Cost*, *Shares*, *Portfolio Diversity*, *Cash Held for Exercise*.
    * CollectionContainer
      * CollectionComponent - collections list
        * CollectionItem - the collections the stock is in
    * NewsContainer
      * NewsComponent
        * NewsItem
    * AnalystRatingsContainer
      * AnalystRatingsComponent 
    * EarningsComponent
    * History Container
      * HistoryComponent
    * PeopleAlsoBoughtContainer
      * PeopleAlsoBoughtComponent
    * TransactionContainer
      * TransactionComponent - floating on the right side of the screen, *buy/sell stock*, *Shares number*, *Market Price*, *Estimated Cost*, *Available Buying Power*
