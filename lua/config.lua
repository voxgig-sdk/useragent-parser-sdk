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
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.useragent.app",
      auth = {
        prefix = "",
        ["in"] = "query",
        name = "key",
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
            ["title"] = "Bot Info",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "client",
            ["title"] = "Client",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "client_summary",
            ["title"] = "Client Summary",
            ["type"] = "`$STRING`",
            ["short"] = "Summary of the client browser and OS",
          },
          {
            ["name"] = "device",
            ["title"] = "Device",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "os_family",
            ["title"] = "Os Family",
            ["type"] = "`$STRING`",
            ["short"] = "Operating system family",
          },
          {
            ["name"] = "os_meta",
            ["title"] = "Os Meta",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "os_version",
            ["title"] = "Os Version",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "ua_family",
            ["title"] = "Ua Family",
            ["type"] = "`$STRING`",
            ["short"] = "User agent family (e.g., Chrome, Firefox)",
          },
          {
            ["name"] = "ua_rendering_engine",
            ["title"] = "Ua Rendering Engine",
            ["type"] = "`$STRING`",
            ["short"] = "Browser rendering engine",
          },
          {
            ["name"] = "ua_rendering_engine_version",
            ["title"] = "Ua Rendering Engine Version",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "ua_type",
            ["title"] = "Ua Type",
            ["type"] = "`$STRING`",
            ["short"] = "Type of user agent (e.g., browser, bot)",
          },
          {
            ["name"] = "ua_version",
            ["title"] = "Ua Version",
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/parse",
                ["segments"] = {
                  {
                    ["lit"] = "parse",
                  },
                },
                ["parts"] = {
                  "parse",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "ua",
                      ["orig"] = "ua",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                    "ua",
                  },
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
