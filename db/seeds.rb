# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

s1 = Stock.create(name: "Vanguard Total Stock Market ETF", symbol: "VTI", price: 148.96, today:-0.05, popularity: 28715, analyst_ratings: 0, in_watchlist: true)
s2 = Stock.create(name: "AMD", symbol: "AMD", price: 31.38, today:0.0, popularity: 174205, analyst_ratings: 33, in_watchlist: true)
s3 = Stock.create(name: "Microsoft", symbol: "MSFT", price: 137.74, today:-0.26, popularity: 218318, analyst_ratings: 91)