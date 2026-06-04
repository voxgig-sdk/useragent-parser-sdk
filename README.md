# UseragentParser SDK

Parse user agent strings into structured browser, OS, device, engine, and bot data

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About UserAgent Parser API

The UserAgent Parser API takes a raw `User-Agent` string and returns a structured breakdown of the client that produced it. It is exposed as a single HTTPS endpoint at [api.useragent.app](https://api.useragent.app) and is intended to be called server-side from analytics, logging, fraud-detection, or device-targeting pipelines.

What you get back from a parse:

- Client details — browser/app family, version, and type
- Operating system family, version, and metadata
- Rendering engine information
- Device classification (mobile, tablet, desktop) with vendor and brand
- Bot detection flags

The service exposes one operation, `GET /parse`, which accepts a `ua` query parameter (the user agent string to analyze) and a `key` query parameter (a 72-character API key). CORS is enabled, so requests can be made from browser contexts as well as servers. Documented response codes include 200 for success, 401 for an invalid key, 402 for billing issues, 422 for content that cannot be parsed, plus standard 4xx/5xx error codes.

## Try it

**TypeScript**
```bash
npm install useragent-parser
```

**Python**
```bash
pip install useragent-parser-sdk
```

**PHP**
```bash
composer require voxgig/useragent-parser-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/useragent-parser-sdk/go
```

**Ruby**
```bash
gem install useragent-parser-sdk
```

**Lua**
```bash
luarocks install useragent-parser-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { UseragentParserSDK } from 'useragent-parser'

const client = new UseragentParserSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o useragent-parser-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "useragent-parser": {
      "command": "/abs/path/to/useragent-parser-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Parse** | The single parsing resource exposed by the API; call `GET /parse?ua=<user-agent>&key=<api-key>` to receive structured client, OS, engine, device, and bot fields. | `/parse` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from useragentparser_sdk import UseragentParserSDK

client = UseragentParserSDK({})


# Load a specific parse
parse, err = client.Parse(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'useragentparser_sdk.php';

$client = new UseragentParserSDK([]);


// Load a specific parse
[$parse, $err] = $client->Parse(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/useragent-parser-sdk/go"

client := sdk.NewUseragentParserSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "UseragentParser_sdk"

client = UseragentParserSDK.new({})


# Load a specific parse
parse, err = client.Parse(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("useragent-parser_sdk")

local client = sdk.new({})


-- Load a specific parse
local parse, err = client:Parse(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = UseragentParserSDK.test()
const result = await client.Parse().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = UseragentParserSDK.test(None, None)
result, err = client.Parse(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = UseragentParserSDK::test(null, null);
[$result, $err] = $client->Parse(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Parse(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = UseragentParserSDK.test(nil, nil)
result, err = client.Parse(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Parse(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the UserAgent Parser API

- Upstream: [https://useragent.app](https://useragent.app)
- API docs: [https://useragent.app/api_specs.yaml](https://useragent.app/api_specs.yaml)

---

Generated from the UserAgent Parser API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
