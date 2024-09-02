import {roses} from "../data/roses.ts";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";

function getAllRoses(): RoseIndexItem[] {
  return roses
    .map(({name, imageUrl, slug}) => ({ name, imageUrl, slug }))
    .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
}

export default getAllRoses;
