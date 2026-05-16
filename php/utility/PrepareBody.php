<?php
declare(strict_types=1);

// UseragentParser SDK utility: prepare_body

class UseragentParserPrepareBody
{
    public static function call(UseragentParserContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
