class GameTemplatesController < ApplicationController

    def index
        templates = GameTemplate.all
        render json: templates

    end

    def show
        template = GameTemplate.find(params[:id])
        render json: template
    end


    def new

    end

    def create
        template = GameTemplate.create(name: params[:name], creator: params[:creator], image_urls: params[:imageUrls], times_played: 0)
        render json: template
    end

    def edit

    end

    def update
        template = GameTemplate.find(params[:id])
        template.update(times_played: params[:times_played])
        render json: template
    end
end
