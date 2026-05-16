
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UseragentParserSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await UseragentParserSDK.test()
    equal(null !== testsdk, true)
  })

})
