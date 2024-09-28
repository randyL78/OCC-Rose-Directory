import {getCompanion} from "../api/get-companion.ts";

interface loaderParams {
  params: {
    slug: string;
  }
}

export async function companionDetailLoader({params}: loaderParams) {
  return getCompanion(params.slug)
}
