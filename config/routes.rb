Rails.application.routes.draw do
  get 'transactions/create'
  get 'transactions/show'
  root to: 'root#index'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
  end
  resources :users, only: [:new, :create]
  resources :stocks, only: [:index, :show]
  resources :deposits, only: [:create, :show]
  resources :transactions, only: [:create, :show]
  match '*path' => 'root#bad_route', via: :all
end
