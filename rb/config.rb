# UseragentParser SDK configuration

module UseragentParserConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "UseragentParser",
        "slug" => "useragent-parser",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://api.useragent.app",
        "auth" => {
          "prefix" => "",
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
              "type" => "`$OBJECT`",
            },
            {
              "name" => "client",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "client_summary",
              "short" => "Summary of the client browser and OS",
              "type" => "`$STRING`",
            },
            {
              "name" => "device",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "os_family",
              "short" => "Operating system family",
              "type" => "`$STRING`",
            },
            {
              "name" => "os_meta",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "os_version",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "ua_family",
              "short" => "User agent family (e.g., Chrome, Firefox)",
              "type" => "`$STRING`",
            },
            {
              "name" => "ua_rendering_engine",
              "short" => "Browser rendering engine",
              "type" => "`$STRING`",
            },
            {
              "name" => "ua_rendering_engine_version",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "ua_type",
              "short" => "Type of user agent (e.g., browser, bot)",
              "type" => "`$STRING`",
            },
            {
              "name" => "ua_version",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "parse",
          "op" => {
            "load" => {
              "input" => "data",
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
                      },
                      {
                        "kind" => "query",
                        "name" => "ua",
                        "orig" => "ua",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
