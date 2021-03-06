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
        if template.id
        render json: template
        else
        render json: { status: "error", code: 4000, message: "Name already taken. Choose another name." }
        end
    end

    def edit

    end

    def update
        template = GameTemplate.find(params[:id])
        number = template.times_played
        template.update(times_played: number + params[:times_played])
        render json: template
    end
end
