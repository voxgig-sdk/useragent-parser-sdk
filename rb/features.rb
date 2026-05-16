# UseragentParser SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module UseragentParserFeatures
  def self.make_feature(name)
    case name
    when "base"
      UseragentParserBaseFeature.new
    when "test"
      UseragentParserTestFeature.new
    else
      UseragentParserBaseFeature.new
    end
  end
end
