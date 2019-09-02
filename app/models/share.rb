# == Schema Information
#
# Table name: shares
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  stock_id   :integer
#  amount     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Share < ApplicationRecord
end
