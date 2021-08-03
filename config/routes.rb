Rails.application.routes.draw do
  resources :lists
  resources :cards

  root to: 'lists#index'
end
