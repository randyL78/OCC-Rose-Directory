import {RoseQrItem} from "./RoseQrItem.ts";
import {RoseDetailItem} from "./RoseDetailItem.ts";
import {PlantIndexItem} from "./PlantIndexItem.ts";
import {RebloomType} from "./RebloomTypes.ts";

export enum ResponseStatusType {
  'unauthorized' = 'unauthorized',
  'success' = 'success',
  'bad_request' = 'bad_request',
  'unknown' = 'unknown',
}

interface roseAdminDetailData {
  rose: RoseDetailItem
  rebloomTypes: string[]
}

export type ResponseDataType =
  RoseQrItem |
  RoseQrItem[] |
  RoseDetailItem |
  RoseDetailItem[] |
  PlantIndexItem |
  PlantIndexItem[] |
  RebloomType |
  RebloomType[] |
  roseAdminDetailData;

export interface RoseResponse {
  status: ResponseStatusType;
  data?: ResponseDataType;
  errorMessage?: string;
}
