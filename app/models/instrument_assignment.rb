class InstrumentAssignment < ApplicationRecord
    belongs_to :instrument
    belongs_to :musician
    belongs_to :song

    validates :song_id, presence: true
    validates :musician_id, presence: true
    validates :instrument_id, presence: true
end
