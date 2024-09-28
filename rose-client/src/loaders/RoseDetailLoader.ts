import getRose from "../api/get-rose.ts";
import {RoseDetailItem} from "../interfaces/RoseDetailItem.ts";

interface loaderParams {
  params: {
    roseSlug: string;
  }
}

export async function roseDetailLoader({params}: loaderParams) {
  const response = await getRose(params.roseSlug)

  if(response) {
    return response as RoseDetailItem
  }

  throw new Response("Rose not found", {status: 404});
}
