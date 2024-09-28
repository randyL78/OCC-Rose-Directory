import {RoseQrItem} from "./RoseQrItem.ts";
import {RoseDetailItem} from "./RoseDetailItem.ts";
import {RoseIndexItem} from "./RoseIndexItem.ts";

export enum ResponseStatusType {
  'unauthorized' = 'unauthorized',
  'success' = 'success',
  'bad_request' = 'bad_request',
  'unkown' = 'unkown',
}

interface roseAdminDetailData {
  rose: RoseDetailItem
  rebloomTypes: string[]
}

export type ResponseDataType = RoseQrItem | RoseQrItem[] | RoseDetailItem | RoseDetailItem[] | RoseIndexItem | RoseIndexItem[] | string | string[] | roseAdminDetailData;

export interface RoseResponse {
  status: ResponseStatusType;
  data?: ResponseDataType;
  errorMessage?: string;
}
