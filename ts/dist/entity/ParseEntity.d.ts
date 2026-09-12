import { UseragentParserEntityBase } from '../UseragentParserEntityBase';
import type { UseragentParserSDK } from '../UseragentParserSDK';
import type { Control } from '../types';
import type { Parse, ParseLoadMatch } from '../UseragentParserTypes';
declare class ParseEntity extends UseragentParserEntityBase<Parse> {
    constructor(client: UseragentParserSDK, entopts: any);
    make(this: ParseEntity): ParseEntity;
    load(this: any, reqmatch?: ParseLoadMatch, ctrl?: Control): Promise<ParseEntity>;
}
export { ParseEntity };
