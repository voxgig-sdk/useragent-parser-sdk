<?php
declare(strict_types=1);

// UseragentParser SDK utility: feature_add

class UseragentParserFeatureAdd
{
    public static function call(UseragentParserContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
