import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {authenticatedRequests} from "./authenticated-request.ts";
import {RebloomType} from "../interfaces/RebloomTypes.ts";

export async function getRebloomTypes(): Promise<RoseResponse> {
  const response = await authenticatedRequests.get('admin/reblooms')

  if(response.status === ResponseStatusType.success) {
    return {
      status: ResponseStatusType.success,
      data: response.data as RebloomType[],
    }
  }

  if(response.status !== ResponseStatusType.unauthorized) {
    console.error("Error fetching rebloom types")
    console.error(response.errorMessage)
  }

  return response
}
