// Typed models for the UseragentParser SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Parse is the typed data model for the parse entity.
type Parse struct {
	BotInfo *map[string]any `json:"bot_info,omitempty"`
	Client *map[string]any `json:"client,omitempty"`
	ClientSummary *string `json:"client_summary,omitempty"`
	Device *map[string]any `json:"device,omitempty"`
	OsFamily *string `json:"os_family,omitempty"`
	OsMeta *map[string]any `json:"os_meta,omitempty"`
	OsVersion *map[string]any `json:"os_version,omitempty"`
	UaFamily *string `json:"ua_family,omitempty"`
	UaRenderingEngine *string `json:"ua_rendering_engine,omitempty"`
	UaRenderingEngineVersion *map[string]any `json:"ua_rendering_engine_version,omitempty"`
	UaType *string `json:"ua_type,omitempty"`
	UaVersion *map[string]any `json:"ua_version,omitempty"`
}

// ParseLoadMatch is the typed request payload for Parse.LoadTyped.
type ParseLoadMatch struct {
	BotInfo *map[string]any `json:"bot_info,omitempty"`
	Client *map[string]any `json:"client,omitempty"`
	ClientSummary *string `json:"client_summary,omitempty"`
	Device *map[string]any `json:"device,omitempty"`
	OsFamily *string `json:"os_family,omitempty"`
	OsMeta *map[string]any `json:"os_meta,omitempty"`
	OsVersion *map[string]any `json:"os_version,omitempty"`
	UaFamily *string `json:"ua_family,omitempty"`
	UaRenderingEngine *string `json:"ua_rendering_engine,omitempty"`
	UaRenderingEngineVersion *map[string]any `json:"ua_rendering_engine_version,omitempty"`
	UaType *string `json:"ua_type,omitempty"`
	UaVersion *map[string]any `json:"ua_version,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
