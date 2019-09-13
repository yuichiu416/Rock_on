Rails.application.routes.draw do
  root to: 'root#index'
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:new, :create, :destroy]
  end
  resources :users, only: [:create]
  resources :deposits, only: [:create, :show]
  resources :transactions, only: [:create, :show]
  match '*path' => 'root#bad_route', via: :all
end
