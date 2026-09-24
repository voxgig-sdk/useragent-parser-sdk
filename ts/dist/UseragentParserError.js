"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseragentParserError = void 0;
class UseragentParserError extends Error {
    isUseragentParserError = true;
    sdk = 'UseragentParser';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.UseragentParserError = UseragentParserError;
//# sourceMappingURL=UseragentParserError.js.map