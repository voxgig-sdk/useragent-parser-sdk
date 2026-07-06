<?php
declare(strict_types=1);

// Typed models for the UseragentParser SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Parse entity data model. */
class Parse
{
    public ?array $bot_info = null;
    public ?array $client = null;
    public ?string $client_summary = null;
    public ?array $device = null;
    public ?string $os_family = null;
    public ?array $os_meta = null;
    public ?array $os_version = null;
    public ?string $ua_family = null;
    public ?string $ua_rendering_engine = null;
    public ?array $ua_rendering_engine_version = null;
    public ?string $ua_type = null;
    public ?array $ua_version = null;
}

/** Request payload for Parse#load. */
class ParseLoadMatch
{
    public ?array $bot_info = null;
    public ?array $client = null;
    public ?string $client_summary = null;
    public ?array $device = null;
    public ?string $os_family = null;
    public ?array $os_meta = null;
    public ?array $os_version = null;
    public ?string $ua_family = null;
    public ?string $ua_rendering_engine = null;
    public ?array $ua_rendering_engine_version = null;
    public ?string $ua_type = null;
    public ?array $ua_version = null;
}

