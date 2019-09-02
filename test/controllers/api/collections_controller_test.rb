require 'test_helper'

class Api::CollectionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_collections_index_url
    assert_response :success
  end

  test "should get show" do
    get api_collections_show_url
    assert_response :success
  end

end
