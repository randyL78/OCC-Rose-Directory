import {RoseDetailItem} from "../interfaces/RoseDetailItem.ts";
import api from "../services/api.ts";

async function getRose(roseSlug: string): Promise<RoseDetailItem|null> {
  try {
    const response = await api.get(`/roses/${roseSlug}`);
    return response.data as RoseDetailItem;
  } catch (e) {
    console.error("Unable to get rose", roseSlug);
    console.error(e);
    return null
  }
}

export default getRose;
