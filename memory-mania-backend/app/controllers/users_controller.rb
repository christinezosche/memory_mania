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
        user = User.create(value: params[:value], user_id: params[:user_id])
        render json: game
    end

end
