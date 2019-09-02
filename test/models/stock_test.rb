# == Schema Information
#
# Table name: stocks
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  symbol          :string           not null
#  price           :integer          not null
#  today           :float            not null
#  popularity      :integer
#  analyst_ratings :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class StockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
