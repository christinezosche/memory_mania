# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

GameTemplate.create(name: "GIF", creator: "Powered by GIPHY", image_urls: [], times_played: 0)
GameTemplate.create(name: "NYT Top Stories", creator: "Powered by the New York Times", image_urls: [], times_played: 0)
GameTemplate.create(name: "Trending TV & Movies", creator: "Powered by the Movie Database", image_urls: [], times_played: 0)
GameTemplate.create(name: "Cat", creator: "Powered by GIPHY", image_urls: [], times_played: 0)

Game.create(time: "1:07", game_id: "1", name: "GIF", username: "ChristineTheCreator")
Game.create(time: "1:01", game_id: "2", name: "GIF", username: "MemoryManiac2")
Game.create(time: "1:15", game_id: "3", name: "GIF", username: "GifFan")
Game.create(time: "1:02", game_id: "4", name: "Trending TV & Movies", username: "FilmBuff")
Game.create(time: "1:08", game_id: "5", name: "Trending TV & Movies", username: "QuentinTarantino")
Game.create(time: "1:20", game_id: "6", name: "Trending TV & Movies", username: "AD123")
Game.create(time: "1:04", game_id: "7", name: "NYT Top Stories", username: "Zebra1")
Game.create(time: "1:09", game_id: "8", name: "NYT Top Stories", username: "MemoryManiac3")
Game.create(time: "1:35", game_id: "9", name: "NYT Top Stories", username: "Steve-O")
Game.create(time: "1:12", game_id: "10", name: "Cat", username: "LitterKitter")
Game.create(time: "1:03", game_id: "11", name: "Cat", username: "PlayerOne")
Game.create(time: "1:06", game_id: "12", name: "Cat", username: "HarryAndRon")
