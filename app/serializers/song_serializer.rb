class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :coverart
  has_many :musicians
  has_many :instruments
end
