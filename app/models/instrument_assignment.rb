class InstrumentAssignment < ApplicationRecord
    belongs_to :instrument
    belongs_to :musician
    belongs_to :song
end
