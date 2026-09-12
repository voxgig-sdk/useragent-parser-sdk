export interface Parse {
    bot_info?: Record<string, any>;
    client?: Record<string, any>;
    client_summary?: string;
    device?: Record<string, any>;
    os_family?: string;
    os_meta?: Record<string, any>;
    os_version?: Record<string, any>;
    ua_family?: string;
    ua_rendering_engine?: string;
    ua_rendering_engine_version?: Record<string, any>;
    ua_type?: string;
    ua_version?: Record<string, any>;
}
export interface ParseLoadMatch {
    key: string;
    ua: string;
}
