
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'UseragentParser',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://api.useragent.app",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      parse: {
      },

    }
  }


  entity = {
    "parse": {
      "fields": [
        {
          "name": "bot_info",
          "type": "`$OBJECT`"
        },
        {
          "name": "client",
          "type": "`$OBJECT`"
        },
        {
          "name": "client_summary",
          "type": "`$STRING`"
        },
        {
          "name": "device",
          "type": "`$OBJECT`"
        },
        {
          "name": "os_family",
          "type": "`$STRING`"
        },
        {
          "name": "os_meta",
          "type": "`$OBJECT`"
        },
        {
          "name": "os_version",
          "type": "`$OBJECT`"
        },
        {
          "name": "ua_family",
          "type": "`$STRING`"
        },
        {
          "name": "ua_rendering_engine",
          "type": "`$STRING`"
        },
        {
          "name": "ua_rendering_engine_version",
          "type": "`$OBJECT`"
        },
        {
          "name": "ua_type",
          "type": "`$STRING`"
        },
        {
          "name": "ua_version",
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
              "args": {
                "query": [
                  {
                    "kind": "query",
                    "name": "key",
                    "orig": "key",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "query",
                    "name": "ua",
                    "orig": "ua",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/parse",
              "parts": [
                "parse"
              ],
              "select": {
                "exist": [
                  "key",
                  "ua"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

