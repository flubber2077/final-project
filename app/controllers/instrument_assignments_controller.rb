class InstrumentAssignmentsController < ApplicationController

    def index
        render json: InstrumentAssignment.all
    end

end
