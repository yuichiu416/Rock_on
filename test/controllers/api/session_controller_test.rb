require 'test_helper'

class Api::SessionControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_session_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_session_delete_url
    assert_response :success
  end

end
