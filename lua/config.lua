-- UseragentParser SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "UseragentParser",
      slug = "useragent-parser",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.useragent.app",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["parse"] = {},
      },
    },
    entity = {
      ["parse"] = {
        ["fields"] = {
          {
            ["name"] = "bot_info",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "client",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "client_summary",
            ["short"] = "Summary of the client browser and OS",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "device",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "os_family",
            ["short"] = "Operating system family",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "os_meta",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "os_version",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "ua_family",
            ["short"] = "User agent family (e.g., Chrome, Firefox)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ua_rendering_engine",
            ["short"] = "Browser rendering engine",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ua_rendering_engine_version",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "ua_type",
            ["short"] = "Type of user agent (e.g., browser, bot)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ua_version",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "parse",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "ua",
                      ["orig"] = "ua",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/parse",
                ["parts"] = {
                  "parse",
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "ua",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
