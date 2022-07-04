class CreateMusicians < ActiveRecord::Migration[7.0]
  def change
    create_table :musicians do |t|
      t.string :name
      t.integer :rate
      
      t.timestamps
    end
  end
end
