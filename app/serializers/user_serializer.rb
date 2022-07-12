class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :login
end
