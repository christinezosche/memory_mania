class UsersController < ApplicationController

    def index
        users = Users.all
        render json: users, only: [:username, :games]

    end

    def show
        user = User.find(params[:id])
        render json: user, only: [:username, :games]
    end

    def new

    end

    def create
        user = User.create(username: params[:username], password_digest: params[:password])
        render json: game
    end

end
