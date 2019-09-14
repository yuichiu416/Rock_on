User.destroy_all
Deposit.destroy_all
Transaction.destroy_all

User.create(username: 'Demo',email: 'demo@demo.com', password: '123456')