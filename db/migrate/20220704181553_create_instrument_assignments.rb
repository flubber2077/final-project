class CreateInstrumentAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :instrument_assignments do |t|
      t.integer :song_id
      t.integer :musician_id
      t.integer :instrument_id
      
      t.timestamps
    end
  end
end
