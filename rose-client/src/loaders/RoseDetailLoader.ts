import getRose from "../api/get-rose.ts";

interface loaderParams {
  params: {
    roseSlug: string;
  }
}

export async function roseDetailLoader({params}: loaderParams) {
  return await getRose(params.roseSlug)
}
