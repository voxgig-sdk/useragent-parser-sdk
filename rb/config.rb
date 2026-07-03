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
              "active" => true,
              "name" => "bot_info",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "client",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "client_summary",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "device",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "os_family",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "os_meta",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "os_version",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "ua_family",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "ua_rendering_engine",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "ua_rendering_engine_version",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "ua_type",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "ua_version",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 11,
            },
          ],
          "name" => "parse",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "key",
                        "orig" => "key",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "ua",
                        "orig" => "ua",
                        "reqd" => true,
                        "type" => "`$STRING`",
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
                  "index$" => 0,
                },
              ],
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
