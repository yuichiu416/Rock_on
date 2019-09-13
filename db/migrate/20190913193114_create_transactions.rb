class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.string :ticker, null: false
      t.float :price, null: false
      t.integer :num_shares, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps
    end
    add_index :transactions, :user_id
    add_index :transactions, :ticker
  end
end