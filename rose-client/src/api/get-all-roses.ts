import {roses} from "../data/roses.ts";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";

function getAllRoses(): RoseIndexItem[] {
  return roses.map(({id, name, imageUrl, slug}) => ({ id, name, imageUrl, slug }));
}

export default getAllRoses;
