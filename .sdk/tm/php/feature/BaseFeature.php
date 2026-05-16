<?php
declare(strict_types=1);

// UseragentParser SDK base feature

class UseragentParserBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(UseragentParserContext $ctx, array $options): void {}
    public function PostConstruct(UseragentParserContext $ctx): void {}
    public function PostConstructEntity(UseragentParserContext $ctx): void {}
    public function SetData(UseragentParserContext $ctx): void {}
    public function GetData(UseragentParserContext $ctx): void {}
    public function GetMatch(UseragentParserContext $ctx): void {}
    public function SetMatch(UseragentParserContext $ctx): void {}
    public function PrePoint(UseragentParserContext $ctx): void {}
    public function PreSpec(UseragentParserContext $ctx): void {}
    public function PreRequest(UseragentParserContext $ctx): void {}
    public function PreResponse(UseragentParserContext $ctx): void {}
    public function PreResult(UseragentParserContext $ctx): void {}
    public function PreDone(UseragentParserContext $ctx): void {}
    public function PreUnexpected(UseragentParserContext $ctx): void {}
}
