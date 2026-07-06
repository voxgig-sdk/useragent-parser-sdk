# frozen_string_literal: true

# Typed models for the UseragentParser SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Parse entity data model.
#
# @!attribute [rw] bot_info
#   @return [Hash, nil]
#
# @!attribute [rw] client
#   @return [Hash, nil]
#
# @!attribute [rw] client_summary
#   @return [String, nil]
#
# @!attribute [rw] device
#   @return [Hash, nil]
#
# @!attribute [rw] os_family
#   @return [String, nil]
#
# @!attribute [rw] os_meta
#   @return [Hash, nil]
#
# @!attribute [rw] os_version
#   @return [Hash, nil]
#
# @!attribute [rw] ua_family
#   @return [String, nil]
#
# @!attribute [rw] ua_rendering_engine
#   @return [String, nil]
#
# @!attribute [rw] ua_rendering_engine_version
#   @return [Hash, nil]
#
# @!attribute [rw] ua_type
#   @return [String, nil]
#
# @!attribute [rw] ua_version
#   @return [Hash, nil]
Parse = Struct.new(
  :bot_info,
  :client,
  :client_summary,
  :device,
  :os_family,
  :os_meta,
  :os_version,
  :ua_family,
  :ua_rendering_engine,
  :ua_rendering_engine_version,
  :ua_type,
  :ua_version,
  keyword_init: true
)

# Request payload for Parse#load.
#
# @!attribute [rw] bot_info
#   @return [Hash, nil]
#
# @!attribute [rw] client
#   @return [Hash, nil]
#
# @!attribute [rw] client_summary
#   @return [String, nil]
#
# @!attribute [rw] device
#   @return [Hash, nil]
#
# @!attribute [rw] os_family
#   @return [String, nil]
#
# @!attribute [rw] os_meta
#   @return [Hash, nil]
#
# @!attribute [rw] os_version
#   @return [Hash, nil]
#
# @!attribute [rw] ua_family
#   @return [String, nil]
#
# @!attribute [rw] ua_rendering_engine
#   @return [String, nil]
#
# @!attribute [rw] ua_rendering_engine_version
#   @return [Hash, nil]
#
# @!attribute [rw] ua_type
#   @return [String, nil]
#
# @!attribute [rw] ua_version
#   @return [Hash, nil]
ParseLoadMatch = Struct.new(
  :bot_info,
  :client,
  :client_summary,
  :device,
  :os_family,
  :os_meta,
  :os_version,
  :ua_family,
  :ua_rendering_engine,
  :ua_rendering_engine_version,
  :ua_type,
  :ua_version,
  keyword_init: true
)

