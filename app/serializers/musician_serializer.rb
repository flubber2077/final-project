class MusicianSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :instruments
end
