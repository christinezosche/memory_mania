class GameTemplatesController < ApplicationController

    def index
        game_templates = GameTemplates.all
        render json: game_templates

    end

    def show
        game_template = GameTemplate.find(params[:id])
        render json: game_template
    end


    def new

    end

    def create
        game_template = GameTemplate.create(name: params[:name], creator: params[:creator], image_urls: params[:image_urls], times_played: 0)
        render json: game_template
    end

    def edit

    end

    def update
        game_template = GameTemplate.find(params[:id])
        game_template.update(times_played: params[:times_played])
        render json: game_template
    end
end
