import { Context } from './Context';
declare class UseragentParserError extends Error {
    isUseragentParserError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { UseragentParserError };
