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
InstrumentAssignment.destroy_all

15.times do
    Musician.create!(
        name: Faker::Name.unique.first_name,
        rate: Faker::Number.between(from: 15, to: 200)
    )
end
puts "done seeding musicians"


15.times do
    Instrument.create!(
        serial_number: Faker::IDNumber.spanish_foreign_citizen_number,
        cost: Faker::Number.between(from: 1, to: 2000),
        make: Faker::Music.instrument
    )
end
puts "done seeding instruments"


4.times do
    Song.create!(
        name: Faker::Music::Prince.song,
        duration: Faker::Number.between(from: 25, to: 2000)
    )
end
puts "done seeding songs"

20.times do
    InstrumentAssignment.create!(
        song_id: Faker::Number.between(from: 1, to: 4),
        musician_id: Faker::Number.between(from: 1, to: 15),
        instrument_id: Faker::Number.between(from: 1, to: 15)
    )
end
puts "done seeding star join table"