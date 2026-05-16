<?php
declare(strict_types=1);

// UseragentParser SDK utility: prepare_headers

class UseragentParserPrepareHeaders
{
    public static function call(UseragentParserContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
