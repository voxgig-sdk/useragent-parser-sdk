"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ParseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when USERAGENT_PARSER_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('USERAGENT_PARSER_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.UseragentParserSDK.test();
        const ent = testsdk.Parse();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.USERAGENT_PARSER_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'parse.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "bot_info", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "client", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "client_summary", "req": false, "short": "Summary of the client browser and OS", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "device", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "os_family", "req": false, "short": "Operating system family", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "os_meta", "req": false, "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "os_version", "req": false, "type": "`$OBJECT`", "index$": 6 }, { "active": true, "name": "ua_family", "req": false, "short": "User agent family (e.g., Chrome, Firefox)", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "ua_rendering_engine", "req": false, "short": "Browser rendering engine", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "ua_rendering_engine_version", "req": false, "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "ua_type", "req": false, "short": "Type of user agent (e.g., browser, bot)", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "ua_version", "req": false, "type": "`$OBJECT`", "index$": 11 }], "name": "parse", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "key", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "ua", "orig": "ua", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /parse", "json": "{\"operationId\":\"parseUserAgent\",\"parameters\":[{\"description\":\"API key (72-character alphanumeric string)\",\"in\":\"query\",\"name\":\"key\",\"required\":true,\"schema\":{\"maxLength\":72,\"minLength\":72,\"pattern\":\"^[a-zA-Z0-9]{72}$\",\"type\":\"string\"}},{\"description\":\"User agent string to be parsed\",\"in\":\"query\",\"name\":\"ua\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"bot_info\":{\"category\":null,\"name\":null,\"url\":null,\"vendor\":{\"name\":null,\"url\":null}},\"client\":{\"bot\":false,\"user\":true},\"client_summary\":\"Chrome 51.0.2704/Linux\",\"device\":{\"brand\":null,\"is_desktop\":true,\"is_mobile\":false,\"is_tablet\":false,\"model\":null},\"os_family\":\"Linux\",\"os_meta\":{\"name\":\"GNU/Linux\",\"platform\":\"x64\",\"short_name\":\"LIN\",\"version\":null},\"os_version\":{\"major\":0,\"minor\":0,\"patch\":0,\"summary\":\"Linux\"},\"ua_family\":\"Chrome\",\"ua_rendering_engine\":\"Blink\",\"ua_rendering_engine_version\":{\"major\":null,\"minor\":null,\"patch\":null,\"summary\":\"Blink\"},\"ua_type\":\"browser\",\"ua_version\":{\"major\":51,\"minor\":0,\"patch\":2704,\"summary\":\"Chrome 51.0.2704\"}},\"schema\":{\"properties\":{\"bot_info\":{\"properties\":{\"category\":{\"nullable\":true,\"type\":\"string\"},\"name\":{\"nullable\":true,\"type\":\"string\"},\"url\":{\"nullable\":true,\"type\":\"string\"},\"vendor\":{\"properties\":{\"name\":{\"nullable\":true,\"type\":\"string\"},\"url\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"client\":{\"properties\":{\"bot\":{\"type\":\"boolean\"},\"user\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"client_summary\":{\"description\":\"Summary of the client browser and OS\",\"type\":\"string\"},\"device\":{\"properties\":{\"brand\":{\"nullable\":true,\"type\":\"string\"},\"is_desktop\":{\"type\":\"boolean\"},\"is_mobile\":{\"type\":\"boolean\"},\"is_tablet\":{\"type\":\"boolean\"},\"model\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"os_family\":{\"description\":\"Operating system family\",\"type\":\"string\"},\"os_meta\":{\"properties\":{\"name\":{\"type\":\"string\"},\"platform\":{\"type\":\"string\"},\"short_name\":{\"type\":\"string\"},\"version\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"os_version\":{\"properties\":{\"major\":{\"type\":\"integer\"},\"minor\":{\"type\":\"integer\"},\"patch\":{\"type\":\"integer\"},\"summary\":{\"type\":\"string\"}},\"type\":\"object\"},\"ua_family\":{\"description\":\"User agent family (e.g., Chrome, Firefox)\",\"type\":\"string\"},\"ua_rendering_engine\":{\"description\":\"Browser rendering engine\",\"type\":\"string\"},\"ua_rendering_engine_version\":{\"properties\":{\"major\":{\"nullable\":true,\"type\":\"integer\"},\"minor\":{\"nullable\":true,\"type\":\"integer\"},\"patch\":{\"nullable\":true,\"type\":\"integer\"},\"summary\":{\"type\":\"string\"}},\"type\":\"object\"},\"ua_type\":{\"description\":\"Type of user agent (e.g., browser, bot)\",\"type\":\"string\"},\"ua_version\":{\"properties\":{\"major\":{\"type\":\"integer\"},\"minor\":{\"type\":\"integer\"},\"patch\":{\"type\":\"integer\"},\"summary\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successfully parsed user agent string\"},\"400\":{\"description\":\"Command unknown - The request is not recognized or formatted incorrectly\"},\"401\":{\"description\":\"Unauthorized - Invalid or missing API key\"},\"402\":{\"description\":\"Billing issue - Payment required or account billing problem\"},\"405\":{\"description\":\"Command invalid - The HTTP method used is not allowed\"},\"409\":{\"description\":\"Command malformed - The request parameters are incorrectly formatted\"},\"422\":{\"description\":\"Unprocessable - The request was well-formed but contains semantic errors\"},\"500\":{\"description\":\"Internal Server Error - An unexpected error occurred on the server\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key required for authentication (72-character alphanumeric string)\",\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/parse", "segments": [{ "lit": "parse" }], "select": { "exist": ["key", "ua"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "parse", "name__orig": "parse", "Name": "Parse", "name_": "parse", "name-": "parse", "NAME": "PARSE", "index$": 0 }, { "active": true, "entity": "parse", "key$": "BasicParseFlow", "kind": "basic", "name": "BasicParseFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "parse_ref01", "srcdatavar": "parse_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-parse_ref01" } }], "index$": 0 }] }, 'Parse');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let parse_ref01_data = Object.values(setup.data.existing.parse)[0];
        // LOAD
        const parse_ref01_ent = client.Parse();
        const parse_ref01_match_dt0 = {};
        const parse_ref01_data_dt0 = (await parse_ref01_ent.load(parse_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != parse_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/parse/ParseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.UseragentParserSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['parse01', 'parse02', 'parse03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'USERAGENT_PARSER_TEST_PARSE_ENTID': idmap,
        'USERAGENT_PARSER_TEST_LIVE': 'FALSE',
        'USERAGENT_PARSER_TEST_EXPLAIN': 'FALSE',
        'USERAGENT_PARSER_APIKEY': '',
    });
    idmap = env['USERAGENT_PARSER_TEST_PARSE_ENTID'];
    const live = 'TRUE' === env.USERAGENT_PARSER_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['USERAGENT_PARSER_TEST_PARSE_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.UseragentParserSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.USERAGENT_PARSER_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.USERAGENT_PARSER_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ParseEntity.test.js.map