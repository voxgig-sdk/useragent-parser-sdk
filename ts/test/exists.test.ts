
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UseragentParserSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = UseragentParserSDK.test()
    equal(testsdk instanceof UseragentParserSDK, true,
      'UseragentParserSDK.test() must return a client synchronously')
  })

})
