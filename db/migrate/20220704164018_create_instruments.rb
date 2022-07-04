class CreateInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :instruments do |t|
      t.string :serial_number
      t.string :make
      t.string :model
      t.integer :cost


      t.timestamps
    end
  end
end
