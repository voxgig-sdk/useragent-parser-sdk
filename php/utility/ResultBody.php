<?php
declare(strict_types=1);

// UseragentParser SDK utility: result_body

class UseragentParserResultBody
{
    public static function call(UseragentParserContext $ctx): ?UseragentParserResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
