import api from "../services/api.ts";
import {CompanionDetailItem} from "../interfaces/CompanionDetailItem.ts";

export async function getCompanion(slug: string): Promise<CompanionDetailItem> {
  try {
    const response = await api.get(`/companions/${slug}`);
    return response.data as CompanionDetailItem;
  } catch (e) {
    console.error("Unable to get companion plant", slug);
    console.error(e);
    throw e
  }
}
