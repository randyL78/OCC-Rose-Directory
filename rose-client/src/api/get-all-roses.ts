import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import api from "../services/api.ts";

async function getAllRoses(): Promise<RoseIndexItem[]> {
  try {
    const response = await api.get('/roses');
    return response.data as RoseIndexItem[];
  } catch (e) {
    console.error(e);
    return []
  }
}

export default getAllRoses;
