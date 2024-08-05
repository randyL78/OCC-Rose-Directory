import {roses} from "../data/roses.ts";
import {Rose} from "../interfaces/Rose.ts";

function getRose(roseSlug: string): Rose {
  return roses.filter(rose => rose.slug === roseSlug)[0];
}

export default getRose;
