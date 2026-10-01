import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "parse",
    "accessor": "Parse",
    "op": "load",
    "method": "GET",
    "path": "/parse",
    "args": [],
    "select": {
      "key": "v1",
      "ua": "v1"
    },
    "headers": [],
    "query": [
      "key",
      "ua"
    ],
    "auth": [
      [
        {
          "in": "query",
          "name": "key"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "client_summary": "Chrome 51.0.2704/Linux",
      "ua_family": "Chrome",
      "ua_version": {
        "major": 51,
        "minor": 0,
        "patch": 2704,
        "summary": "Chrome 51.0.2704"
      },
      "os_family": "Linux",
      "os_version": {
        "major": 0,
        "minor": 0,
        "patch": 0,
        "summary": "Linux"
      },
      "ua_type": "browser",
      "bot_info": {
        "name": null,
        "category": null,
        "url": null,
        "vendor": {
          "name": null,
          "url": null
        }
      },
      "os_meta": {
        "name": "GNU/Linux",
        "short_name": "LIN",
        "version": null,
        "platform": "x64"
      },
      "ua_rendering_engine": "Blink",
      "ua_rendering_engine_version": {
        "major": null,
        "minor": null,
        "patch": null,
        "summary": "Blink"
      },
      "device": {
        "is_mobile": false,
        "is_tablet": false,
        "is_desktop": true,
        "brand": null,
        "model": null
      },
      "client": {
        "bot": false,
        "user": true
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
