Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :musicians
  resources :songs
  resources :instruments
  resources :instrument_assignments

  get '/contact', to: 'contact#new'
  post '/contact', to: 'contact#create'

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
