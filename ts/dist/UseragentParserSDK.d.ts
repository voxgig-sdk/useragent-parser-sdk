import { ParseEntity } from './entity/ParseEntity';
export type * from './UseragentParserTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { UseragentParserEntityBase } from './UseragentParserEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class UseragentParserSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Parse(entopts?: Record<string, any>): ParseEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): UseragentParserSDK;
    tester(testopts?: any, sdkopts?: any): UseragentParserSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof UseragentParserSDK;
export { stdutil, config, BaseFeature, UseragentParserEntityBase, UseragentParserSDK, SDK, };
export type { DirectResult };
