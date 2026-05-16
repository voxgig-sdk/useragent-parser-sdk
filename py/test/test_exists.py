# ProjectName SDK exists test

import pytest
from useragentparser_sdk import UseragentParserSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = UseragentParserSDK.test(None, None)
        assert testsdk is not None
