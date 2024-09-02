import {roses} from "../data/roses.ts";
import {RoseDetailItem} from "../interfaces/RoseDetailItem.ts";

function getRose(roseSlug: string): RoseDetailItem {
  return roses.filter(rose => rose.slug === roseSlug)[0];
}

export default getRose;
