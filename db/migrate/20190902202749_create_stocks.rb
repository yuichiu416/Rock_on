class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.boolean :in_watchlist, default: false, null:false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.timestamps

    end
    add_index :stocks, :name, unique:true
    add_index :stocks, :symbol, unique:true
  end
end

