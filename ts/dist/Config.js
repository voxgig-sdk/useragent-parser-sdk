"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'UseragentParser',
        slug: "useragent-parser",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
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
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.useragent.app",
        auth: {
            prefix: '',
            in: 'query',
            name: 'key',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            parse: {},
        }
    };
    entity = {
        "parse": {
            "fields": [
                {
                    "name": "bot_info",
                    "title": "Bot Info",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "client",
                    "title": "Client",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "client_summary",
                    "title": "Client Summary",
                    "type": "`$STRING`",
                    "short": "Summary of the client browser and OS"
                },
                {
                    "name": "device",
                    "title": "Device",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "os_family",
                    "title": "Os Family",
                    "type": "`$STRING`",
                    "short": "Operating system family"
                },
                {
                    "name": "os_meta",
                    "title": "Os Meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "os_version",
                    "title": "Os Version",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ua_family",
                    "title": "Ua Family",
                    "type": "`$STRING`",
                    "short": "User agent family (e.g., Chrome, Firefox)"
                },
                {
                    "name": "ua_rendering_engine",
                    "title": "Ua Rendering Engine",
                    "type": "`$STRING`",
                    "short": "Browser rendering engine"
                },
                {
                    "name": "ua_rendering_engine_version",
                    "title": "Ua Rendering Engine Version",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ua_type",
                    "title": "Ua Type",
                    "type": "`$STRING`",
                    "short": "Type of user agent (e.g., browser, bot)"
                },
                {
                    "name": "ua_version",
                    "title": "Ua Version",
                    "type": "`$OBJECT`"
                }
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
                                    "lit": "parse"
                                }
                            ],
                            "parts": [
                                "parse"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "query": [
                                    {
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    },
                                    {
                                        "name": "ua",
                                        "orig": "ua",
                                        "type": "`$STRING`",
                                        "kind": "query",
                                        "reqd": true
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "key",
                                    "ua"
                                ]
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map