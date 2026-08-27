<?php
declare(strict_types=1);

// UseragentParser SDK configuration

class UseragentParserConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "UseragentParser",
                "slug" => "useragent-parser",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://api.useragent.app",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "parse" => [],
                ],
            ],
            "entity" => [
        'parse' => [
          'fields' => [
            [
              'name' => 'bot_info',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'client',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'client_summary',
              'short' => 'Summary of the client browser and OS',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'device',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'os_family',
              'short' => 'Operating system family',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'os_meta',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'os_version',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'ua_family',
              'short' => 'User agent family (e.g., Chrome, Firefox)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ua_rendering_engine',
              'short' => 'Browser rendering engine',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ua_rendering_engine_version',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'ua_type',
              'short' => 'Type of user agent (e.g., browser, bot)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ua_version',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'parse',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'key',
                        'orig' => 'key',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'ua',
                        'orig' => 'ua',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/parse',
                  'parts' => [
                    'parse',
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'ua',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return UseragentParserFeatures::make_feature($name);
    }
}
