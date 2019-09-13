# == Schema Information
#
# Table name: stocks
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  symbol       :string           not null
#  in_watchlist :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
