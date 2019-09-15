
User.destroy_all
Deposit.destroy_all
Transaction.destroy_all

user = User.create(username: 'Demo',email: 'demo@demo.com', password: '123456')

Deposit.create(user_id: user.id, amount: 5000);

Transaction.create(user_id: user.id, ticker: "MSFT", price: 138, num_shares: 7);
Deposit.create(user_id: user.id, amount: -966);
Transaction.create(user_id: user.id, ticker: "AMD", price: 30, num_shares: 50);
Deposit.create(user_id: user.id, amount: -1500);
Transaction.create(user_id: user.id, ticker: "DIS", price: 137, num_shares: 7);
Deposit.create(user_id: user.id, amount: -959);
Transaction.create(user_id: user.id, ticker: "INTC", price: 52, num_shares: 3);
Deposit.create(user_id: user.id, amount: -156);
Transaction.create(user_id: user.id, ticker: "AAPL", price: 217, num_shares: 6);
Deposit.create(user_id: user.id, amount: -1302);