# UseragentParser SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "UseragentParser",
            "slug": "useragent-parser",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.useragent.app",
            "auth": {
                "prefix": "",
                "in": "query",
                "name": "key",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "parse": {},
            },
        },
        "entity": {
      "parse": {
        "fields": [
          {
            "name": "bot_info",
            "title": "Bot Info",
            "type": "`$OBJECT`",
          },
          {
            "name": "client",
            "title": "Client",
            "type": "`$OBJECT`",
          },
          {
            "name": "client_summary",
            "title": "Client Summary",
            "type": "`$STRING`",
            "short": "Summary of the client browser and OS",
          },
          {
            "name": "device",
            "title": "Device",
            "type": "`$OBJECT`",
          },
          {
            "name": "os_family",
            "title": "Os Family",
            "type": "`$STRING`",
            "short": "Operating system family",
          },
          {
            "name": "os_meta",
            "title": "Os Meta",
            "type": "`$OBJECT`",
          },
          {
            "name": "os_version",
            "title": "Os Version",
            "type": "`$OBJECT`",
          },
          {
            "name": "ua_family",
            "title": "Ua Family",
            "type": "`$STRING`",
            "short": "User agent family (e.g., Chrome, Firefox)",
          },
          {
            "name": "ua_rendering_engine",
            "title": "Ua Rendering Engine",
            "type": "`$STRING`",
            "short": "Browser rendering engine",
          },
          {
            "name": "ua_rendering_engine_version",
            "title": "Ua Rendering Engine Version",
            "type": "`$OBJECT`",
          },
          {
            "name": "ua_type",
            "title": "Ua Type",
            "type": "`$STRING`",
            "short": "Type of user agent (e.g., browser, bot)",
          },
          {
            "name": "ua_version",
            "title": "Ua Version",
            "type": "`$OBJECT`",
          },
        ],
        "name": "parse",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/parse",
                "segments": [
                  {
                    "lit": "parse",
                  },
                ],
                "parts": [
                  "parse",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "key",
                      "orig": "key",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                    {
                      "name": "ua",
                      "orig": "ua",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "key",
                    "ua",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
