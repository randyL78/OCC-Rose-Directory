import {RoseQrItem} from "./RoseQrItem.ts";
import {RoseDetailItem} from "./RoseDetailItem.ts";
import {RoseIndexItem} from "./RoseIndexItem.ts";

export enum ResponseStatusType {
  'unauthorized' = 'unauthorized',
  'success' = 'success',
  'bad_request' = 'bad_request',
  'unkown' = 'unkown',
}

type RoseType = RoseQrItem | RoseQrItem[] | RoseDetailItem | RoseDetailItem[] | RoseIndexItem | RoseIndexItem[];

export interface RoseResponse {
  status: ResponseStatusType;
  data?: RoseType;
  errorMessage?: string;
}
