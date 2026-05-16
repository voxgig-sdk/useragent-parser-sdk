package = "voxgig-sdk-useragent-parser"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/useragent-parser-sdk.git"
}
description = {
  summary = "UseragentParser SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["useragent-parser_sdk"] = "useragent-parser_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
