# UseragentParser SDK utility: make_context

from core.context import UseragentParserContext


def make_context_util(ctxmap, basectx):
    return UseragentParserContext(ctxmap, basectx)
