# Typed models for the UseragentParser SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Parse:
    bot_info: Optional[dict] = None
    client: Optional[dict] = None
    client_summary: Optional[str] = None
    device: Optional[dict] = None
    os_family: Optional[str] = None
    os_meta: Optional[dict] = None
    os_version: Optional[dict] = None
    ua_family: Optional[str] = None
    ua_rendering_engine: Optional[str] = None
    ua_rendering_engine_version: Optional[dict] = None
    ua_type: Optional[str] = None
    ua_version: Optional[dict] = None


@dataclass
class ParseLoadMatch:
    bot_info: Optional[dict] = None
    client: Optional[dict] = None
    client_summary: Optional[str] = None
    device: Optional[dict] = None
    os_family: Optional[str] = None
    os_meta: Optional[dict] = None
    os_version: Optional[dict] = None
    ua_family: Optional[str] = None
    ua_rendering_engine: Optional[str] = None
    ua_rendering_engine_version: Optional[dict] = None
    ua_type: Optional[str] = None
    ua_version: Optional[dict] = None

