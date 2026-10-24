# UseragentParser SDK utility: prepare_body
require_relative 'media'
module UseragentParserUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return UseragentParserUtilities.raw_body(ctx.reqdata) if UseragentParserUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
