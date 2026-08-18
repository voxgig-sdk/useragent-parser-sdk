# UseragentParser SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.useragent.app",
            "auth": {
                "prefix": "",
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
            "type": "`$OBJECT`",
          },
          {
            "name": "client",
            "type": "`$OBJECT`",
          },
          {
            "name": "client_summary",
            "type": "`$STRING`",
          },
          {
            "name": "device",
            "type": "`$OBJECT`",
          },
          {
            "name": "os_family",
            "type": "`$STRING`",
          },
          {
            "name": "os_meta",
            "type": "`$OBJECT`",
          },
          {
            "name": "os_version",
            "type": "`$OBJECT`",
          },
          {
            "name": "ua_family",
            "type": "`$STRING`",
          },
          {
            "name": "ua_rendering_engine",
            "type": "`$STRING`",
          },
          {
            "name": "ua_rendering_engine_version",
            "type": "`$OBJECT`",
          },
          {
            "name": "ua_type",
            "type": "`$STRING`",
          },
          {
            "name": "ua_version",
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
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "key",
                      "orig": "key",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "ua",
                      "orig": "ua",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/parse",
                "parts": [
                  "parse",
                ],
                "select": {
                  "exist": [
                    "key",
                    "ua",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
