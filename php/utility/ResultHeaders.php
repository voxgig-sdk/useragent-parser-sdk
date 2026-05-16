<?php
declare(strict_types=1);

// UseragentParser SDK utility: result_headers

class UseragentParserResultHeaders
{
    public static function call(UseragentParserContext $ctx): ?UseragentParserResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
