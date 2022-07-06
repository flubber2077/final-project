class SongSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration
  has_many :musicians
end
