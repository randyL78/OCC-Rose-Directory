import {RoseIndexItem} from "./RoseIndexItem.ts";

export interface Rose extends RoseIndexItem {
  description: string;
  history: string;
  careInstructions: string;
  reblooms: boolean;
  fragranceIntensity: number;
  fragranceDescription: string;
  colorPrimary: string;
  colorSecondary?: string;
}
