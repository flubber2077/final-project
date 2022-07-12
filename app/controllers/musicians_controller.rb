class MusiciansController < ApplicationController

        def index 
            musicians = Musician.order_alphabetical
            render json: musicians, status: :ok
        end
end
