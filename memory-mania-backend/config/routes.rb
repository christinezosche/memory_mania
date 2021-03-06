Rails.application.routes.draw do
  resources :game_templates, only: [:index, :show, :new, :create, :edit, :update]
  resources :games, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
