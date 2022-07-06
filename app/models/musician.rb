class Musician < ApplicationRecord
    has_many :instrument_assignments
    has_many :instruments, through: :instrument_assignments
    has_many :songs, through: :instrument_assignments

    validates :name, presence: true
    validates :name, uniqueness: {case_sensitivity: false}
end
