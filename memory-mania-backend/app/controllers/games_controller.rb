class GamesController < ApplicationController

    def index
        games = Game.all
        render json: games

    end

    def show
        game = Game.find(params[:id])
        render json: game
    end

    def new

    end

    def create
        game = Game.create(time: params[:time], name: params[:name], game_id: params[:game_id], user_id: params[:user_id])
        render json: game
    end

end
