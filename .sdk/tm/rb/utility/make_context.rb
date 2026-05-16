# UseragentParser SDK utility: make_context
require_relative '../core/context'
module UseragentParserUtilities
  MakeContext = ->(ctxmap, basectx) {
    UseragentParserContext.new(ctxmap, basectx)
  }
end
