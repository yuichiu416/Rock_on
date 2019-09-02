Rails.application.routes.draw do
  get 'root/root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :show, :index]
    resources :stocks, only: [:index, :show]
    resources :collections, only: [:index, :show]
    resource :session, only: [:new, :delete]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#index'

end