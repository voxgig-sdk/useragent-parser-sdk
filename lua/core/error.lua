-- UseragentParser SDK error

local UseragentParserError = {}
UseragentParserError.__index = UseragentParserError


function UseragentParserError.new(code, msg, ctx)
  local self = setmetatable({}, UseragentParserError)
  self.is_sdk_error = true
  self.sdk = "UseragentParser"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function UseragentParserError:error()
  return self.msg
end


function UseragentParserError:__tostring()
  return self.msg
end


return UseragentParserError
