# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Share.destroy_all
Stock.destroy_all
User.destroy_all
Watchlist.destroy_all
Deposit.destroy_all
Transaction.destroy_all

User.create(username: 'Demo',
            email: 'demo@demo.com',
            password: '123456')

Deposit.create(user_id: 1, amount: 500);
Deposit.create(user_id: 1, amount: 500);
Deposit.create(user_id: 1, amount: 1000);
Deposit.create(user_id: 1, amount: 1000);