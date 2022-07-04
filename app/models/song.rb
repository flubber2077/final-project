class Song < ApplicationRecord
    has_many :instrument_assignments
    has_many :instruments, through: :instrument_assignments
    has_many :musicians, through: :instrument_assignments
end
