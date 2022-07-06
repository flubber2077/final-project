class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :serial_number, :make, :cost
end
