class SongsController < ApplicationController

    def index
        render json: Song.all
    end

    def show
        song = Song.find(params[:id])
        sumRate = sum(song.musicians)
        render json: song
        # sumRate has to nest inside of song info
        # 
        # write a custom serializer

        # most popular instrument or instrument or musician by instrument
        # look into sql query where clause, passing id, group by user_id and then order it

        #order musicians by amount played

        #turn data from song into a pdf and email

        #helper methods are ok

        #no extra routes
    end

    def sum(targetMusicians)
        sum = 0
        targetMusicians.each do |number|
            sum += number.rate
        end
        return sum
    end
end
