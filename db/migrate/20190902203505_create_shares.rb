class CreateShares < ActiveRecord::Migration[5.2]
  def change
    create_table :shares do |t|
      t.integer :user_id, unique:true
      t.integer :stock_id, unique:true
      t.integer :amount, unique:true
      t.datetime :created_at, unique:true

      t.datetime :updated_at, unique:true
      t.timestamps
    end
    add_index :shares, [:user_id, :stock_id], unique:true
  end
end
