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
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.useragent.app",
                "auth" => [
                    "prefix" => "",
                    "in" => "query",
                    "name" => "key",
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
              'title' => 'Bot Info',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'client',
              'title' => 'Client',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'client_summary',
              'title' => 'Client Summary',
              'type' => '`$STRING`',
              'short' => 'Summary of the client browser and OS',
            ],
            [
              'name' => 'device',
              'title' => 'Device',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'os_family',
              'title' => 'Os Family',
              'type' => '`$STRING`',
              'short' => 'Operating system family',
            ],
            [
              'name' => 'os_meta',
              'title' => 'Os Meta',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'os_version',
              'title' => 'Os Version',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'ua_family',
              'title' => 'Ua Family',
              'type' => '`$STRING`',
              'short' => 'User agent family (e.g., Chrome, Firefox)',
            ],
            [
              'name' => 'ua_rendering_engine',
              'title' => 'Ua Rendering Engine',
              'type' => '`$STRING`',
              'short' => 'Browser rendering engine',
            ],
            [
              'name' => 'ua_rendering_engine_version',
              'title' => 'Ua Rendering Engine Version',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'ua_type',
              'title' => 'Ua Type',
              'type' => '`$STRING`',
              'short' => 'Type of user agent (e.g., browser, bot)',
            ],
            [
              'name' => 'ua_version',
              'title' => 'Ua Version',
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
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/parse',
                  'segments' => [
                    [
                      'lit' => 'parse',
                    ],
                  ],
                  'parts' => [
                    'parse',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'key',
                        'orig' => 'key',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                      [
                        'name' => 'ua',
                        'orig' => 'ua',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'key',
                      'ua',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
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
