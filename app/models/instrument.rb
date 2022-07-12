class Instrument < ApplicationRecord
    has_many :instrument_assignments
    has_many :instruments, through: :instrument_assignments
    has_many :musicians, through: :instrument_assignments

    def self.lowest_rate
        self.musician.order(:rate).last
    end
end
