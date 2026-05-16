# UseragentParser SDK exists test

require "minitest/autorun"
require_relative "../UseragentParser_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = UseragentParserSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
