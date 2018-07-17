Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :cities do
        resources :posts
      end
    end
    resources :cities, only: [:index, :show] do
      resources :posts, only: [:index, :show]
    end
  end
end
