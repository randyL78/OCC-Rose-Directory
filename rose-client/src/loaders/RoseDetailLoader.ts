import getRose from "../api/get-rose.ts";

interface loaderParams {
  params: {
    roseSlug: string;
  }
}

export async function roseDetailLoader({params}: loaderParams) {
  return getRose(params.roseSlug)
}
