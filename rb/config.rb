# UseragentParser SDK configuration

module UseragentParserConfig
  def self.make_config
    {
      "main" => {
        "name" => "UseragentParser",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.useragent.app",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "parse" => {},
        },
      },
      "entity" => {
        "parse" => {
          "fields" => [
            {
              "name" => "bot_info",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "client",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "client_summary",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "device",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "os_family",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "os_meta",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "os_version",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "ua_family",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "ua_rendering_engine",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "ua_rendering_engine_version",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 9,
            },
            {
              "name" => "ua_type",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 10,
            },
            {
              "name" => "ua_version",
              "req" => false,
              "type" => "`$OBJECT`",
              "active" => true,
              "index$" => 11,
            },
          ],
          "name" => "parse",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "key",
                        "orig" => "key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "ua",
                        "orig" => "ua",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/parse",
                  "parts" => [
                    "parse",
                  ],
                  "select" => {
                    "exist" => [
                      "key",
                      "ua",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    UseragentParserFeatures.make_feature(name)
  end
end
