Rails.application.routes.draw do
  get 'contact/new'
  get 'contact/create'
  get 'contact/new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #get '/contact', to: 'contact#new'

  resources :musicians
  resources :songs
  resources :instruments
  resources :instrument_assignments

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
