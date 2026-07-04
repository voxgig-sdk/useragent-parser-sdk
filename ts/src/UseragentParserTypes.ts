// Typed models for the UseragentParser SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Parse {
  bot_info?: Record<string, any>
  client?: Record<string, any>
  client_summary?: string
  device?: Record<string, any>
  os_family?: string
  os_meta?: Record<string, any>
  os_version?: Record<string, any>
  ua_family?: string
  ua_rendering_engine?: string
  ua_rendering_engine_version?: Record<string, any>
  ua_type?: string
  ua_version?: Record<string, any>
}

export type ParseLoadMatch = Partial<Parse>

