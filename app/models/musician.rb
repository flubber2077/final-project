class Musician < ApplicationRecord
    has_many :instrument_assignments
    has_many :instruments, through: :instrument_assignments
    has_many :songs, through: :instrument_assignments

    def self.alphabetical
        self.order(:name)
    end

    def self.order_alphabetical
        self.order(name: :ASC)
    end

    validates :name, presence: true, uniqueness: {case_sensitivity: false}
    validates :rate, presence: true, numericality: {only_integer: true}
end
