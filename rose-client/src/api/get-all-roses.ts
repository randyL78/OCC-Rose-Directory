import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import api from "../services/api.ts";

async function getAllRoses(): Promise<RoseIndexItem[]> {
  let roses: RoseIndexItem[] = [];

  try {
    const response = await api.get('/roses');
    // TODO: Add content checking to ensure response is what we are expecting
    roses = response.data;
  } catch (e) {
    // TODO: Handle errors more gracefully
    console.error(e);
  }

  return roses
    .map(({name, imageUrl, slug}) => ({ name, imageUrl, slug }))
    .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
}

export default getAllRoses;
