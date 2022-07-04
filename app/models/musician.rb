class Musician < ApplicationRecord
    has_many :instrument_assignments
    has_many :instruments, through :instrument_assignments
    has_many :songs, through :instrument_assignments
end
