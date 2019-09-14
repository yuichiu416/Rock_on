# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Deposit.destroy_all
Transaction.destroy_all

User.create(username: 'Demo',email: 'demo@demo.com', password: '123456')

Deposit.create(user_id: 3, amount: 5000);

Transaction.create(user_id: 3, ticker: "MSFT", price: 138, num_shares: 7);
Transaction.create(user_id: 3, ticker: "AMD", price: 30, num_shares: 50);
Transaction.create(user_id: 3, ticker: "DIS", price: 137, num_shares: 7);
Transaction.create(user_id: 3, ticker: "INTC", price: 52, num_shares: 3);
Transaction.create(user_id: 3, ticker: "AAPL", price: 217, num_shares: 6);