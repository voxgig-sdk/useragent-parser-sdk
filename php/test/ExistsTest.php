<?php
declare(strict_types=1);

// UseragentParser SDK exists test

require_once __DIR__ . '/../useragentparser_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = UseragentParserSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
