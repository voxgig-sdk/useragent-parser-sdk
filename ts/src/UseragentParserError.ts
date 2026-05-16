
import { Context } from './Context'


class UseragentParserError extends Error {

  isUseragentParserError = true

  sdk = 'UseragentParser'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  UseragentParserError
}

