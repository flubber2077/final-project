class MusicianSerializer < ActiveModel::Serializer
  attributes :id, :name, :rate
  has_many :instruments
end
