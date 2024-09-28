import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";
import api from "../services/api.ts";

async function getAllRoses(): Promise<PlantIndexItem[]> {
  try {
    const response = await api.get('/roses');
    return response.data as PlantIndexItem[];
  } catch (e) {
    console.error(e);
    return []
  }
}

export default getAllRoses;
