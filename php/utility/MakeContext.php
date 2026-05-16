<?php
declare(strict_types=1);

// UseragentParser SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class UseragentParserMakeContext
{
    public static function call(array $ctxmap, ?UseragentParserContext $basectx): UseragentParserContext
    {
        return new UseragentParserContext($ctxmap, $basectx);
    }
}
