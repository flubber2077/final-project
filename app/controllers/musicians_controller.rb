class MusiciansController < ApplicationController

    def index
        render json: Musician.all
    end
end
