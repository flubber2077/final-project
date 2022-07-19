class MusicianSerializer < ActiveModel::Serializer
  attributes :id, :name, :rate, :music_instrument
  has_many :instruments
end
