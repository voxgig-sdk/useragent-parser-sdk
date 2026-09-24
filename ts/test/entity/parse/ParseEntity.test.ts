

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { UseragentParserSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ParseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when USERAGENT_PARSER_TEST_LIVE=TRUE.
  afterEach(liveDelay('USERAGENT_PARSER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = UseragentParserSDK.test()
    const ent = testsdk.Parse()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.USERAGENT_PARSER_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'parse.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bot_info":{"a":true,"h":"Bot Info","n":"bot_info","r":false,"t":"`$OBJECT`","key$":"bot_info","index$":0},"client":{"a":true,"h":"Client","n":"client","r":false,"t":"`$OBJECT`","key$":"client","index$":1},"client_summary":{"a":true,"h":"Client Summary","n":"client_summary","r":false,"sh":"Summary of the client browser and OS","t":"`$STRING`","key$":"client_summary","index$":2},"device":{"a":true,"h":"Device","n":"device","r":false,"t":"`$OBJECT`","key$":"device","index$":3},"os_family":{"a":true,"h":"Os Family","n":"os_family","r":false,"sh":"Operating system family","t":"`$STRING`","key$":"os_family","index$":4},"os_meta":{"a":true,"h":"Os Meta","n":"os_meta","r":false,"t":"`$OBJECT`","key$":"os_meta","index$":5},"os_version":{"a":true,"h":"Os Version","n":"os_version","r":false,"t":"`$OBJECT`","key$":"os_version","index$":6},"ua_family":{"a":true,"h":"Ua Family","n":"ua_family","r":false,"sh":"User agent family (e.g., Chrome, Firefox)","t":"`$STRING`","key$":"ua_family","index$":7},"ua_rendering_engine":{"a":true,"h":"Ua Rendering Engine","n":"ua_rendering_engine","r":false,"sh":"Browser rendering engine","t":"`$STRING`","key$":"ua_rendering_engine","index$":8},"ua_rendering_engine_version":{"a":true,"h":"Ua Rendering Engine Version","n":"ua_rendering_engine_version","r":false,"t":"`$OBJECT`","key$":"ua_rendering_engine_version","index$":9},"ua_type":{"a":true,"h":"Ua Type","n":"ua_type","r":false,"sh":"Type of user agent (e.g., browser, bot)","t":"`$STRING`","key$":"ua_type","index$":10},"ua_version":{"a":true,"h":"Ua Version","n":"ua_version","r":false,"t":"`$OBJECT`","key$":"ua_version","index$":11}},"name":"parse","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /parse","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"key","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"ua","or":"ua","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/parse","q":{"exist":["key","ua"]},"r":{},"s":[{"lit":"parse"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"parse","name__orig":"parse","Name":"Parse","name_":"parse","name-":"parse","NAME":"PARSE","index$":0}, {"active":true,"entity":"parse","key$":"BasicParseFlow","kind":"basic","name":"BasicParseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"parse_ref01","srcdatavar":"parse_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-parse_ref01"}}],"index$":0}]}, 'Parse', {"GET /parse":{"protocol":"http","operationId":"parseUserAgent","responses":{"200":{"description":"Successfully parsed user agent string","content":{"application/json":{"schema":{"type":"object","properties":{"client_summary":{"description":"Summary of the client browser and OS","key$":"client_summary","type":"string"},"ua_family":{"description":"User agent family (e.g., Chrome, Firefox)","key$":"ua_family","type":"string"},"ua_version":{"key$":"ua_version","properties":{"major":{"type":"integer"},"minor":{"type":"integer"},"patch":{"type":"integer"},"summary":{"type":"string"}},"type":"object"},"os_family":{"description":"Operating system family","key$":"os_family","type":"string"},"os_version":{"key$":"os_version","properties":{"major":{"type":"integer"},"minor":{"type":"integer"},"patch":{"type":"integer"},"summary":{"type":"string"}},"type":"object"},"ua_type":{"description":"Type of user agent (e.g., browser, bot)","key$":"ua_type","type":"string"},"bot_info":{"key$":"bot_info","properties":{"category":{"nullable":true,"type":"string"},"name":{"nullable":true,"type":"string"},"url":{"nullable":true,"type":"string"},"vendor":{"properties":{"name":{"nullable":true,"type":"string"},"url":{"nullable":true,"type":"string"}},"type":"object"}},"type":"object"},"os_meta":{"key$":"os_meta","properties":{"name":{"type":"string"},"platform":{"type":"string"},"short_name":{"type":"string"},"version":{"nullable":true,"type":"string"}},"type":"object"},"ua_rendering_engine":{"description":"Browser rendering engine","key$":"ua_rendering_engine","type":"string"},"ua_rendering_engine_version":{"key$":"ua_rendering_engine_version","properties":{"major":{"nullable":true,"type":"integer"},"minor":{"nullable":true,"type":"integer"},"patch":{"nullable":true,"type":"integer"},"summary":{"type":"string"}},"type":"object"},"device":{"key$":"device","properties":{"brand":{"nullable":true,"type":"string"},"is_desktop":{"type":"boolean"},"is_mobile":{"type":"boolean"},"is_tablet":{"type":"boolean"},"model":{"nullable":true,"type":"string"}},"type":"object"},"client":{"key$":"client","properties":{"bot":{"type":"boolean"},"user":{"type":"boolean"}},"type":"object"}},"index$":0},"example":{"client_summary":"Chrome 51.0.2704/Linux","ua_family":"Chrome","ua_version":{"major":51,"minor":0,"patch":2704,"summary":"Chrome 51.0.2704"},"os_family":"Linux","os_version":{"major":0,"minor":0,"patch":0,"summary":"Linux"},"ua_type":"browser","bot_info":{"name":null,"category":null,"url":null,"vendor":{"name":null,"url":null}},"os_meta":{"name":"GNU/Linux","short_name":"LIN","version":null,"platform":"x64"},"ua_rendering_engine":"Blink","ua_rendering_engine_version":{"major":null,"minor":null,"patch":null,"summary":"Blink"},"device":{"is_mobile":false,"is_tablet":false,"is_desktop":true,"brand":null,"model":null},"client":{"bot":false,"user":true}}}}},"400":{"description":"Command unknown - The request is not recognized or formatted incorrectly"},"401":{"description":"Unauthorized - Invalid or missing API key"},"402":{"description":"Billing issue - Payment required or account billing problem"},"405":{"description":"Command invalid - The HTTP method used is not allowed"},"409":{"description":"Command malformed - The request parameters are incorrectly formatted"},"422":{"description":"Unprocessable - The request was well-formed but contains semantic errors"},"500":{"description":"Internal Server Error - An unexpected error occurred on the server"}},"parameters":[{"name":"key","in":"query","required":true,"description":"API key (72-character alphanumeric string)","schema":{"type":"string","minLength":72,"maxLength":72,"pattern":"^[a-zA-Z0-9]{72}$"},"index$":0},{"name":"ua","in":"query","required":true,"description":"User agent string to be parsed","schema":{"type":"string"},"index$":1}],"security":[{"ApiKeyAuth":[]}],"securitySource":"operation","securitySchemes":{"ApiKeyAuth":{"type":"apiKey","in":"query","name":"key","description":"API key required for authentication (72-character alphanumeric string)"}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let parse_ref01_data = Object.values(setup.data.existing.parse)[0] as any

    // LOAD
    const parse_ref01_ent = client.Parse()
    const parse_ref01_match_dt0: any = {}
    const parse_ref01_data_dt0 = (await parse_ref01_ent.load(parse_ref01_match_dt0)).data()
    assert(null != parse_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/parse/ParseTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = UseragentParserSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['parse01','parse02','parse03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'USERAGENT_PARSER_TEST_PARSE_ENTID': idmap,
    'USERAGENT_PARSER_TEST_LIVE': 'FALSE',
    'USERAGENT_PARSER_TEST_EXPLAIN': 'FALSE',
    'USERAGENT_PARSER_APIKEY': '',
  })

  idmap = env['USERAGENT_PARSER_TEST_PARSE_ENTID']

  const live = 'TRUE' === env.USERAGENT_PARSER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['USERAGENT_PARSER_TEST_PARSE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new UseragentParserSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
