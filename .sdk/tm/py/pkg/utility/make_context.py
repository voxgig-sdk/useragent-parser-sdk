# UseragentParser SDK utility: make_context

from projectname_sdk.core.context import UseragentParserContext


def make_context_util(ctxmap, basectx):
    return UseragentParserContext(ctxmap, basectx)
