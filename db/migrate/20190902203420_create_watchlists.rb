class CreateWatchlists < ActiveRecord::Migration[5.2]
  def change
    create_table :watchlists do |t|
      t.integer :user_id, unique:true
      t.datetime :created_at, unique:true

      t.datetime :updated_at, unique:true
      t.timestamps
    end
    add_index :watchlists, :user_id, unique:true
  end
end
