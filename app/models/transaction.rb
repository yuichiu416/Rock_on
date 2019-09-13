# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  ticker     :string           not null
#  price      :float            not null
#  num_shares :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Transaction < ApplicationRecord
    validates :user_id, :ticker, :price, :num_shares, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
