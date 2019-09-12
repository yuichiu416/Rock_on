# == Schema Information
#
# Table name: deposits
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deposit < ApplicationRecord
    validates :user_id, presence: true
    validates :amount, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
