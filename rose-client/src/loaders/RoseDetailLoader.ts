import getRose from "../api/get-rose.ts";
import {Rose} from "../interfaces/Rose.ts";

export interface roseLoaderData {
  rose: Rose
}

export async function roseDetailLoader({params}: { params: { roseSlug: string}}): Promise<roseLoaderData> {
  const rose = getRose(params.roseSlug)
  return { rose }
}
