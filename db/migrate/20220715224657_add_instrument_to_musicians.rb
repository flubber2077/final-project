class AddInstrumentToMusicians < ActiveRecord::Migration[7.0]
  def change
    add_column :musicians, :music_instrument, :string
  end
end
