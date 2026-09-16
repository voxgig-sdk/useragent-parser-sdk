# UseragentParser SDK feature factory

from useragentparser_sdk.feature.base_feature import UseragentParserBaseFeature
from useragentparser_sdk.feature.ratelimit_feature import UseragentParserRatelimitFeature
from useragentparser_sdk.feature.retry_feature import UseragentParserRetryFeature
from useragentparser_sdk.feature.test_feature import UseragentParserTestFeature
from useragentparser_sdk.feature.timeout_feature import UseragentParserTimeoutFeature


_FEATURES = {
    "base": lambda: UseragentParserBaseFeature(),
    "ratelimit": lambda: UseragentParserRatelimitFeature(),
    "retry": lambda: UseragentParserRetryFeature(),
    "test": lambda: UseragentParserTestFeature(),
    "timeout": lambda: UseragentParserTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
