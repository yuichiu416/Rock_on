Rails.application.routes.draw do
  root to: 'root#index'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
  end
  resources :users, only: [:new, :create]
  resources :stocks, only: [:index, :show]

  post 'stocks/:stockName/watchlist', to: 'stocks#add'
  delete 'stocks/:stockName/watchlist', to: 'stocks#remove'
  post 'stocks/:stockName', to: 'stocks#trade'
  get 'account', to: 'users#show'

  match '#/*path' => 'root#bad_route', via: :all
  match '*path' => 'root#bad_route', via: :all
end
