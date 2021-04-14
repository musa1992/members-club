Rails.application.routes.draw do
  
  devise_for :users
  devise_scope :user do
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
end
