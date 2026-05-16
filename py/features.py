# UseragentParser SDK feature factory

from feature.base_feature import UseragentParserBaseFeature
from feature.test_feature import UseragentParserTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UseragentParserBaseFeature(),
        "test": lambda: UseragentParserTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
