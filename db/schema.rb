# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_13_193114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "deposits", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_deposits_on_user_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "ticker", null: false
    t.float "price", null: false
    t.integer "num_shares", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticker"], name: "index_transactions_on_ticker"
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["password_digest"], name: "index_users_on_password_digest", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
