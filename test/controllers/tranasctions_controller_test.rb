require 'test_helper'

class TranasctionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tranasctions_create_url
    assert_response :success
  end

  test "should get show" do
    get tranasctions_show_url
    assert_response :success
  end

end
