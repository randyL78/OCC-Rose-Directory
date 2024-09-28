import {ResponseStatusType, RoseResponse} from "../interfaces/Response.ts";
import {AdminRoseDetailItem} from "../interfaces/AdminRoseDetailItem.ts";
import {authenticatedRequests} from "./authenticated-request.ts";

async function getAdminRose(slug: string): Promise<RoseResponse> {
  const response = await authenticatedRequests.get(`admin/roses/${slug}`)

  if (response.status === ResponseStatusType.success) {
    return {
      status: ResponseStatusType.success,
      data: response.data as AdminRoseDetailItem,
    }
  }

  if (response.status !== ResponseStatusType.unauthorized) {
    console.error("Error fetching Admin Rose")
    console.error(response.errorMessage)
  }

  return response
}

export default getAdminRose;
