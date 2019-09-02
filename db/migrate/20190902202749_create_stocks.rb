class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :price, null: false
      t.float :today, null: false
      t.integer :popularity
      t.integer :analyst_ratings
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps

    end
    add_index :stocks, :name, unique:true
    add_index :stocks, :symbol, unique:true
  end
end

