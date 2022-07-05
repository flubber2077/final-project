# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Musician.destroy_all
Song.destroy_all
Instrument.destroy_all

30.times do
    Musician.create!(
        name: Faker::Name.unique.first_name
    )
end

30.times do
    Instrument.create!(
        serial_number: Faker::IDNumber.spanish_foreign_citizen_number,
        
    )
end