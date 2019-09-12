class CreateDeposits < ActiveRecord::Migration[5.2]
  def change
    create_table :deposits do |t|
      t.integer :user_id, null: false
      t.float :amount, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
    add_index :deposits, :user_id
  end
end
