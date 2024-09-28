import api from "../services/api.ts";
import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";

export async function getAllCompanions() {
  try {
    const response = await api.get('/companions');
    return response.data as PlantIndexItem[];
  } catch (e) {
    console.error(e);
    return []
  }
}
