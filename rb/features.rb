# UseragentParser SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module UseragentParserFeatures
  def self.make_feature(name)
    case name
    when "base"
      UseragentParserBaseFeature.new
    when "ratelimit"
      UseragentParserRatelimitFeature.new
    when "retry"
      UseragentParserRetryFeature.new
    when "test"
      UseragentParserTestFeature.new
    when "timeout"
      UseragentParserTimeoutFeature.new
    else
      UseragentParserBaseFeature.new
    end
  end
end
