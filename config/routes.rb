Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    resources :cities do
      resources :posts
    end
  end

  root to: "api/cities#index"
end
