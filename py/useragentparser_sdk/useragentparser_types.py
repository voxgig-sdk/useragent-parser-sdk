# Typed models for the UseragentParser SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Parse(TypedDict, total=False):
    bot_info: dict
    client: dict
    client_summary: str
    device: dict
    os_family: str
    os_meta: dict
    os_version: dict
    ua_family: str
    ua_rendering_engine: str
    ua_rendering_engine_version: dict
    ua_type: str
    ua_version: dict


class ParseLoadMatch(TypedDict, total=False):
    bot_info: dict
    client: dict
    client_summary: str
    device: dict
    os_family: str
    os_meta: dict
    os_version: dict
    ua_family: str
    ua_rendering_engine: str
    ua_rendering_engine_version: dict
    ua_type: str
    ua_version: dict
