class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration
  has_many :musicians
  has_many :instruments
end
