<?php
declare(strict_types=1);

// UseragentParser SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class UseragentParserFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new UseragentParserBaseFeature();
            case "test":
                return new UseragentParserTestFeature();
            default:
                return new UseragentParserBaseFeature();
        }
    }
}
